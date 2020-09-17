import styled, { createGlobalStyle } from "styled-components";

import BGImage from "./images/calmseas.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
`
export const Title = styled.h1`
    font-family: "Raleway", serif;
    font-size: 3rem;
    color: #FFF;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: "Raleway", Arial;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        margin: 20px;
    }
    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
        correct ?
            "#56FFA4"
            : !correct && userClicked
                ? "#FF5656"
                : "#56CCFF"
    };
        border: none;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        color: #000;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`