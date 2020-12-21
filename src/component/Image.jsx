import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { usePalette } from 'react-palette';

const StyledFigure = styled.figure`
position: relative;
height: 100%;

:hover .overlay{
/* visibility: visible; */
opacity: 1;
transition: opacity .2s ease-in-out;

.company, .slogan {
  opacity: 1;
  transition: opacity .3s ease-in-out .4s;
}
.slogan {
  transition: opacity .3s ease-in-out .5s;
}
}


.overlay {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${props => (props.backgroundOverlay ? props.backgroundOverlay : '')};
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 10px;
  /* visibility: hidden; */
  opacity: 0;
  transition:  opacity .3s ease-in-out;
  display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;

    .company {
      font-size: 15px;
      opacity: 0;
    }

    .slogan {
      font-size: 25px;
      opacity: 0;
    }
}
`;

const Image = ({
    fileName, alt, style, className, to, company,
    slogan,
}) => {
    const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

    const { fluid } = allImageSharp.nodes.find(n => n.fluid.originalName === fileName);
    // get color from image
    const { data } = usePalette(fluid.src);
    return (
        <Link to={to}>
            <StyledFigure backgroundOverlay={data.darkVibrant}>
                <div className="overlay">
                    <p className="company">{company}</p>
                    <p className="slogan">{slogan}</p>
                </div>
                <Img fluid={fluid} alt={alt} className={className} />
            </StyledFigure>
        </Link>
    );
};

export default Image;
