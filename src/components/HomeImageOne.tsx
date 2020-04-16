import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const HomeImageOne: React.FC<{}> = () => {
    const data: GatsbyTypes.HomeImageOneQuery = useStaticQuery<GatsbyTypes.HomeImageOneQuery>(graphql`
        query HomeImageOne {
            file(relativePath: { eq: "analytics.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return <Img fluid={data.file?.childImageSharp?.fluid} />;
};

export default HomeImageOne;
