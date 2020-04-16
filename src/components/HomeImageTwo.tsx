import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const HomeImageTwo: React.FC<{}> = () => {
    const data: GatsbyTypes.HomeImageTwoQuery = useStaticQuery<GatsbyTypes.HomeImageTwoQuery>(graphql`
        query HomeImageTwo {
            file(relativePath: { eq: "job-applications.png" }) {
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

export default HomeImageTwo;
