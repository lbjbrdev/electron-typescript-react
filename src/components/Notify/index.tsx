/* eslint-disable no-use-before-define */
import React from 'react';

import * as S from './styles';

interface IProps {
    type: 'success' | 'warning' | 'error';
    show: boolean;
    text: string;
    onClose: () => void;
};

export function Notify({ type, show, text, onClose }: IProps) {
    const renderComponent = () => {
        if (show) {
            return (
                <S.Container
                    type={type}
                    onClick={onClose}
                >
                    <p>{text}</p>
                </S.Container>
            );
        } else {
            return <React.Fragment />
        }
    };

    return renderComponent();
};