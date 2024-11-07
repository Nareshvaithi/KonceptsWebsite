// Meta.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function Meta() {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Home - Koncepts Design and Development';
            case '/about':
                return 'About - Koncepts Design and Development';
            case '/services':
                return 'Services - Koncepts Design and Development';
            case '/projects':
                return 'Projects - Koncepts Design and Development';
            case '/portfolio':
                return 'Portfolio - Koncepts Design and Development';
            case '/carrier':
                return 'Carrier - Koncepts Design and Development';
            case '/contact':
                return 'Contact - Koncepts Design and Development';
            case '/getaquote':
                return 'Get A Quote - Koncepts Design and Development';
            default:
                return 'Koncepts Design and Development';
        }
    };

    const title = getTitle();

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={`${title} page of Koncepts Design and Development`} />
        </Helmet>
    );
}

export default Meta;
