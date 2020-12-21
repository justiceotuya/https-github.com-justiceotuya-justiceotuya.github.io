import React from 'react'
import styled from 'styled-components'

const StyledIndexPage = styled.main`
height: 85vh;
width: 100vw;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    padding: 2em;
    margin: 0 auto;

    .greeting {
      font-size: 20px;
    line-height: 38px;
    font-weight: 400;
    color: #342e38;

    strong {
      color: #000;
    }


@media screen and (min-width: 480px) and (max-width: 767px){
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
}


  }

    `

export const IntroSection = () => {
    return (
        <StyledIndexPage className="container">
            <title>Home Page</title>
            <p className="greeting">Hello,</p>
            <p className="greeting">my name is <strong>Justice Otuya</strong>, I’m a <strong>Web Developer</strong> based in Lagos, Nigeria and this is a selection of my <strong>Personal</strong> and <strong>Professional work.</strong></p>
        </StyledIndexPage>

    )
}
