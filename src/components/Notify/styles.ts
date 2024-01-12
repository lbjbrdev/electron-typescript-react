import styled from "styled-components";

interface IProps {
    type: 'success' | 'warning' | 'error';
};

const colorType = {
    success: '#50FA7B',
    warning: '#F1FA8C',
    error: '#FF5555'
};

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20rem;
    height: 5rem;

    margin-left: 360px;
    margin-top: 15px;

    background-color: ${(props: IProps) => colorType[props.type]};

    cursor: pointer;

    transition: all .2s;

    &:hover {
        opacity: .5;
    }

    border-bottom: 6px solid #fff;
`;