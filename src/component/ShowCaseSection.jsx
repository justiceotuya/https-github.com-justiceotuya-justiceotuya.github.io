import React from 'react';
import styled from 'styled-components';
import { Image } from '.';
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

export const ShowCaseSection = () => (
    <StyledShowCaseSection className="showcaseSection">
        {
            imagesData.map(image => {
                const {
                    project, tagLine, coverImageName, coverImageAlt,
                } = image;
                return (
                    <Image
                        fileName={coverImageName}
                        alt={coverImageAlt}
                        className="image_test"
                        to={project.toLowerCase()}
                        key={project}
                        company={project}
                        slogan={tagLine}
                    />
                );
            })
        }

    </StyledShowCaseSection>
);
