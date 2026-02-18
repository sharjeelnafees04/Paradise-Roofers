import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://paradiseroofers.com';
const APP_PATH = path.join(process.cwd(), 'src/App.tsx');
const SITEMAP_FOLDER = path.join(process.cwd(), 'public');
const SITEMAP_PATH = path.join(SITEMAP_FOLDER, 'sitemap.xml');

// Ensure public folder exists
if (!fs.existsSync(SITEMAP_FOLDER)) {
    fs.mkdirSync(SITEMAP_FOLDER, { recursive: true });
}

// Function to extract routes from App.tsx
const getRoutesFromApp = () => {
    try {
        const appContent = fs.readFileSync(APP_PATH, 'utf8');
        const routes = [];

        // Regex to match <Route path="..." />
        // Handles single quotes, double quotes, and verifies it's inside a Route component
        const routeRegex = /<Route[^>]*?path=["']([^"']+)["'][^>]*?>/g;

        let match;
        while ((match = routeRegex.exec(appContent)) !== null) {
            const routePath = match[1];

            // Exclude dynamic routes (containing :) and catch-all (*)
            if (!routePath.includes(':') && !routePath.includes('*')) {
                routes.push(routePath);
            }
        }

        return routes;
    } catch (error) {
        console.error('Error reading App.tsx:', error);
        return [];
    }
};

const cleanUrl = (routePath) => {
    // Handle root path
    if (routePath === '/') return `${SITE_URL}/`;

    // Remove leading slash for consistency
    const cleanPath = routePath.startsWith('/') ? routePath.substring(1) : routePath;

    // Ensure trailing slash and no double slashes
    return `${SITE_URL}/${cleanPath}/`.replace(/([^:]\/)\/+/g, "$1");
};

const generateSitemap = async () => {
    console.log('Reading routes from src/App.tsx...');
    const routes = getRoutesFromApp();

    console.log(`Found ${routes.length} static routes.`);
    console.log(routes);

    if (routes.length === 0) {
        console.warn('Warning: No routes found. Check regex or file content.');
    }

    // Use Set to remove duplicates
    const uniqueUrls = new Set(routes.map(route => cleanUrl(route)));
    const currentDate = new Date().toISOString();

    let urlXml = '';
    for (const loc of uniqueUrls) {
        // Priority logic: Root is 1.0, Services/About/Contact 0.9, others 0.8
        let priority = '0.8';
        if (loc === `${SITE_URL}/`) priority = '1.0';
        else if (loc.includes('services') || loc.includes('about') || loc.includes('contact')) priority = '0.9';

        urlXml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
    }

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlXml}</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`Sitemap generated with ${uniqueUrls.size} URLs at ${SITEMAP_PATH}`);
};

generateSitemap();
