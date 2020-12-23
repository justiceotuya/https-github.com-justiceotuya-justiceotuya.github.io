import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Image, Layout } from '../../component';

const StyledPortFolioPageContainer = styled.div`
padding: 2em;
.homeLink {
    color: black;
    display: inline;
    font-size: clamp(1rem, 2.5vw, 2rem);

    :hover {
        color:#C6C6C6 ;
    }
}

.projectDescription {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;

    .project,
    .client,
    .description{
    margin-bottom:20px;
    font-size: clamp(1rem, 2.5vw, 2rem);
    display: flex;
    flex-direction: column;
    line-height: 150%;
    font-weight: 400;
    color: #342e38;

    strong {
      color: #000;
    }


/* @media screen and (min-width: 480px) and (max-width: 767px){
    font-size: 24px;
    line-height: 40px;
    }

    @media screen  and (min-width: 768px) and (max-width: 991px){
    font-size: 28px;
    line-height: 48px;
}
    @media screen  and (min-width: 992px){
      font-size: 32px;
    line-height: 56px;
} */


    .title{
           color: #000000
        }


    @media screen and (min-width: 720px){
        flex-direction: row;
        .title{
            width: 250px;
        }
        .text{
            width: calc(100% - 250px);
        }

    }

}
}

`;

const StyledDeviceContainer = styled.div`
border-radius: 1em;
border: 20px solid #F8F9FA;
border-color:${props => props.isMobile && '#676767'};
width: 100%;
max-width: ${props => (props.isMobile ? '400px' : '1000px')};
margin: 40px auto;
position: relative;


.controlButtons{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
position: absolute;
left:0;
top:-20px;
    .close ,
    .minimize ,
    .maximize {
        width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 100%;
    margin-right: 10px
    }

    .close {
        background-color: #FF5F58;
        border-color: #EF9D9A;
    }
    .minimize {
        background-color: #E5E5E5;
        border-color: #C6C6C6;
    }
    .maximize{
        border-color: #00AB00;
        background-color: #29C83F;
    }
}
`;

export default function Component({ data }) {
    const {
        portfolioJson: {
            coverImageAlt, coverImageName, id,
            imagesFileName, project, tagLine, title,
        },
    } = data;

    return (
        <Layout>
            <StyledPortFolioPageContainer>
                <Link to="/" className="homeLink">
                    <p>Home</p>
                </Link>
                {/* <h1>{Project}</h1> */}
                <section className="projectDescription">
                    {/* <h1 className="project">
                        {' '}
                        Project :
                        {' '}
                        {tagLine}
                    </h1> */}

                    <div className="project">
                        <p className="title">
                            Project :
                        </p>
                        <p className="text">
                            {tagLine}
                        </p>
                    </div>
                    {/* <div className="client">
                        <p className="title">
                            Client :
                        </p>
                        <p className="text">
                            {project}
                        </p>
                    </div> */}

                    <div className="client">
                        <p className="title">
                            Client :
                        </p>
                        <p className="text">
                            {project}
                        </p>
                    </div>

                    {/* <div className="description">
                        <p className="title">Description :</p>
                        <p className="text"> Lorem ipsum dolor sit amet consectetur, adipisiusandae rerucing elit. Dolores quisquam iusto, cumque possimus, quasi odit harum impedit voluptatum recm libero natus molestiae vitae dignissimos quod neque minus quaerat. Nisi.</p>
                    </div> */}
                </section>
                {
                    imagesFileName.map(image => {
                        const { imageAlt, imageName, isMobile } = image;
                        return (
                            <StyledDeviceContainer
                                isMobile={isMobile}
                                key={imageAlt}
                            >
                                { !isMobile && (
                                    <div className="controlButtons">
                                        <div className="close" />
                                        <div className="minimize" />
                                        <div className="maximize" />
                                    </div>
                                )}
                                <Image
                                    fileName={imageName}
                                    alt={imageAlt}
                                    className="image_test"
                                    title={title}
                                    isMobile={isMobile}
                                    key={imageName}
                                    // to={project.toLowerCase()}
                                    key={imageAlt}
                                />
                            </StyledDeviceContainer>
                        );
                    })
                }
            </StyledPortFolioPageContainer>
        </Layout>
    ); // highlight-line
}

// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.

export const query = graphql`
  query($project: String) {
    portfolioJson(project: {eq: $project}) {
        coverImageAlt
        id
        coverImageName
        imagesFileName {
          imageAlt
          imageName
          isMobile
        }
        project
        tagLine
      }

  }
`;
