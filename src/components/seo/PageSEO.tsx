
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getContentBySlug, WPPage, YoastHeadJson } from '@/services/wordpress';
import { cleanCanonicalUrl } from '@/utils/seoUtils';
import { useLocation, useNavigate } from 'react-router-dom';

const SITE_NAME = 'Paradise Roofers';

const PageSEO = ({ slug }: { slug: string }) => {
    const { data: page, isLoading, isError } = useQuery<WPPage | null>({
        queryKey: ['wordpress-page', slug],
        queryFn: () => getContentBySlug(slug),
        staleTime: 600000,
    });

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Add trailing slash handling if needed, though redirect handler will generally handle it
    }, [location.pathname]);

    if (isLoading) return <Helmet><title>Loading...</title></Helmet>;
    if (isError || !page) return <Helmet><title>Page Not Found - {SITE_NAME}</title></Helmet>;

    const yoast = page.yoast_head_json;

    if (!yoast) {
        // Fallback if no Yoast data
        return (
            <Helmet>
                <title>{page.title.rendered} - {SITE_NAME}</title>
                <meta name="description" content={page.excerpt.rendered.replace(/<[^>]+>/g, '')} />
                <link rel="canonical" href={cleanCanonicalUrl(window.location.href)} />
            </Helmet>
        );
    }

    const canonicalUrl = cleanCanonicalUrl(yoast.canonical);

    return (
        <Helmet>
            {/* Title */}
            <title>{yoast.title}</title>

            {/* Meta Tags */}
            <meta name="description" content={yoast.description} />
            <meta name="robots" content={`${yoast.robots.index}, ${yoast.robots.follow}`} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:locale" content={yoast.og_locale} />
            <meta property="og:type" content={yoast.og_type} />
            <meta property="og:title" content={yoast.og_title} />
            <meta property="og:description" content={yoast.og_description} />
            <meta property="og:url" content={cleanCanonicalUrl(yoast.og_url)} />
            <meta property="og:site_name" content={yoast.og_site_name} />
            {yoast.og_image && yoast.og_image.map((img, index) => (
                <meta key={index} property="og:image" content={img.url} />
            ))}

            {/* Twitter */}
            <meta name="twitter:card" content={yoast.twitter_card} />
            {yoast.twitter_site && <meta name="twitter:site" content={yoast.twitter_site} />}

            {/* Schema */}
            {yoast.schema && (
                <script type="application/ld+json">
                    {JSON.stringify(yoast.schema)}
                </script>
            )}
        </Helmet>
    );
};

export default PageSEO;
