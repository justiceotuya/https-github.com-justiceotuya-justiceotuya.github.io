import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from './Image';
import { imagesData } from '../utility/constants';

const StyledShowCaseSection = styled.section`
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    display: grid;
    padding: 2em;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    grid-gap: 1.5em;

    @media screen and (min-width: 500px)  and (max-width: 1000px){
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media screen and (min-width: 1001px){
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }

    @media screen and (min-width: 1440px){
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        grid-gap: 2em;
    }

    .image_test {
        border-radius: 10px;
        height: 100%;
        width: 100%;
    }
`;

const query = graphql`
query {
    allPortfolioJson {
        nodes {
          coverImageAlt
          coverImageName
          id
          imagesFileName {
            imageAlt
            imageName
          }
          project
          tagLine
          title
        }
      }
}`;

export const ShowCaseSection = () => {
    const { allPortfolioJson } = useStaticQuery(query);

    return (
        <StyledShowCaseSection className="showcaseSection">
            {
                allPortfolioJson.nodes.map(imageData => {
                    const {
                        project, tagLine, coverImageName, coverImageAlt, title,
                    } = imageData;
                    return (
                        <Image
                            fileName={coverImageName}
                            alt={coverImageAlt}
                            className="image_test"
                            title={title}
                            key={project}
                            company={project}
                            slogan={tagLine}
                            portfolioData={imageData}
                            hasOverLay
                        />
                    );
                })
            }

        </StyledShowCaseSection>
    );
};
