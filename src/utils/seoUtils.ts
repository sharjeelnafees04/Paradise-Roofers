
const SITE_URL = 'https://paradiseroofers.com';
const BACKEND_URL = 'https://cms.paradiseroofers.com';

export const cleanCanonicalUrl = (url: string | undefined): string => {
    if (!url) return SITE_URL;

    let cleaned = url.replace(BACKEND_URL, SITE_URL);

    // Force HTTPS
    if (cleaned.startsWith('http://')) {
        cleaned = cleaned.replace('http://', 'https://');
    }

    // Ensure trailing slash (except strict file paths)
    if (!cleaned.endsWith('/') && !cleaned.match(/\.[a-zA-Z0-9]+$/)) {
        cleaned += '/';
    }

    // Handle double slash from bad concatenations (careful not to break proto)
    cleaned = cleaned.replace(/([^:]\/)\/+/g, '$1');

    return cleaned;
};

export const getCleanUrl = (path: string): string => {
    const url = `${SITE_URL}${path.startsWith('/') ? path : '/' + path}`;
    return cleanCanonicalUrl(url);
};
