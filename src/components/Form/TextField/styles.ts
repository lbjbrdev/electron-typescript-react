import styled from "styled-components";

interface IProps {
    hasError: boolean;
}

export const Field = styled.input`
    margin-top: 3rem;

    height: 3rem;
    width: 23rem;

    border-radius: 0.3rem;
    border: 2.5px solid ${(props: IProps) => props.hasError ? 'red' : 'transparent'};

    outline: none;

    font-size: 1.2em;

    padding: 0.7rem;
`;