import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Logo: React.FC<{}> = () => {
    const data: GatsbyTypes.LogoQuery = useStaticQuery<GatsbyTypes.LogoQuery>(graphql`
        query Logo {
            file(relativePath: { eq: "logo.svg" }) {
                publicURL
            }
        }
    `);

    return <img src={data.file?.publicURL} />;
};

export default Logo;
