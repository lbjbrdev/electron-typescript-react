import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
`;

export const Button = styled.button`
    margin-top: 1.5rem;

    width: 12rem;
    height: 2.5rem;

    border-radius: 0.3rem;

    border: 0;

    cursor: pointer;

    background-color: #FFF;

    font-size: 1.1rem;

    transition: all .5s;

    &:hover {
        opacity: .5;
    }
`;