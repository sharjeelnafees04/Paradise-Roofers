
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const currentUrl = window.location.href;
        const { protocol, host, pathname, search, hash } = window.location;

        let shouldRedirect = false;
        let newProtocol = protocol;
        let newHost = host;
        let newPathname = pathname;

        // 1. Force HTTPS
        if (protocol !== 'https:' && host !== 'localhost' && !host.includes('127.0.0.1')) {
            newProtocol = 'https:';
            shouldRedirect = true;
        }

        // 2. Remove 'www'
        if (host.startsWith('www.')) {
            newHost = host.replace('www.', '');
            shouldRedirect = true;
        }

        // 3. Trailing Slash (ignore files with extensions)
        if (!pathname.endsWith('/') && !pathname.match(/\.[a-zA-Z0-9]+$/)) {
            newPathname = `${pathname}/`;
            shouldRedirect = true;
        }

        if (shouldRedirect) {
            const newUrl = `${newProtocol}//${newHost}${newPathname}${search}${hash}`;

            // Prevent infinite loop if we are already at the target
            if (newUrl !== currentUrl) {
                window.location.replace(newUrl);
            }
        }
    }, [location]);

    return null;
};

export default RedirectHandler;
