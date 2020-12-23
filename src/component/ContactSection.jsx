import React from 'react';
import styled from 'styled-components';

const StyledContactSectionContainer = styled.main`
height: 95vh;
width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    padding: 2em;
    margin: 0 auto;
    color: #342e38;

    @media screen and (max-width: 1023px){
        max-width: 700px;
    }

    h1 {
      font-size: clamp(1rem, 2.5vw, 2rem);
    line-height:  clamp(40px, 200%, 46px);
    font-weight: 400;
margin-bottom: 30px;

    strong, a {
      color: #000;
      text-decoration: none;
    }

  }

  .contact {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.socialMedia {
    display:flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        color: #000000;
        font-size: clamp(.6rem, 2vw, 1.6rem);
margin-left: 4px;
transform: scale(1);
            transition: transform .2s ease-in;
        :hover {
            color: #484749;
            transform: scale(1.2);
            transition: transform .2s ease-in
        }
    }
}

    `;
export const ContactSection = () => (
    <StyledContactSectionContainer>
        <h1>
            Say hello to me at
            {' '}
            <strong>
                {' '}
                <a href="mailto:jotuya2@gmail.com">jotuya2@gmail.com</a>
            </strong>
            {' '}
            or connect with me on social media.
        </h1>

        <div className="contact">
            <div className="socialMedia">
                <a href="https://twitter.com/justiceotuya" target="_blank">
                    Twitter
                </a>
            </div>
            <div className="socialMedia">
                <a href="https://linkedin.com/in/justiceotuya" target="_blank">
                    Linkedin
                </a>
            </div>
            <div className="socialMedia">
                <a href="http://medium.com/@justiceotuya" target="_blank">
                    Medium
                </a>
            </div>
            <div className="socialMedia">
                <a href="http://github.com/justiceotuya" target="_blank"> Github</a>
            </div>
        </div>

    </StyledContactSectionContainer>
);
