import React from 'react';
import Helmet from 'react-helmet';

const SEO: React.FC<{}> = () => {
    return (
        <Helmet
            title={'Tech Job Hunt'}
            meta={[
                {
                    name: `description`,
                    content: 'An app to record job applications and view analytics related to your job search.',
                },
                {
                    property: `og:title`,
                    content: 'Tech Job Hunt',
                },
                {
                    property: `og:description`,
                    content: 'An app to record job applications and view analytics related to your job search.',
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:title`,
                    content: 'Tech Job Hunt',
                },
                {
                    name: `twitter:description`,
                    content: 'An app to record job applications and view analytics related to your job search.',
                },
            ]}
        >
            <html lang="en" />
        </Helmet>
    );
};

export default SEO;
