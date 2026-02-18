import axios from 'axios';

const WP_API_URL = 'https://cms.paradiseroofers.com/wp-json/wp/v2';

export interface ViewportContent {
    width?: string;
    initial_scale?: string;
    user_scalable?: string;
}

export interface RobotContent {
    index?: string;
    follow?: string;
    'max-snippet'?: string;
    'max-image-preview'?: string;
    'max-video-preview'?: string;
}

export interface OGImage {
    width: number;
    height: number;
    url: string;
    type: string;
}

export interface YoastHeadJson {
    title: string;
    description: string;
    robots: RobotContent;
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_publisher?: string;
    article_modified_time?: string;
    og_image: OGImage[];
    twitter_card: string;
    twitter_site?: string;
    schema: any;
}

export interface WPPage {
    id: number;
    date: string;
    date_gmt: string;
    guid: { rendered: string };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: { rendered: string };
    content: { rendered: string; protected: boolean };
    excerpt: { rendered: string; protected: boolean };
    author: number;
    featured_media: number;
    parent: number;
    menu_order: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: any[];
    yoast_head_json?: YoastHeadJson;
}

const api = axios.create({
    baseURL: WP_API_URL,
});

export const getPageBySlug = async (slug: string): Promise<WPPage | null> => {
    try {
        const response = await api.get<WPPage[]>('/pages', {
            params: { slug },
        });
        if (response.data && response.data.length > 0) {
            return response.data[0];
        }
        return null;
    } catch (error) {
        console.error(`Error fetching page with slug ${slug}:`, error);
        return null;
    }
};

export const getPostBySlug = async (slug: string): Promise<WPPage | null> => {
    try {
        const response = await api.get<WPPage[]>('/posts', {
            params: { slug },
        });
        if (response.data && response.data.length > 0) {
            return response.data[0];
        }
        return null;
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        return null;
    }
};

export const getContentBySlug = async (slug: string): Promise<WPPage | null> => {
    // Try page first, then post
    const page = await getPageBySlug(slug);
    if (page) return page;

    const post = await getPostBySlug(slug);
    return post;
};
