import { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError: boolean;
};

export function TextField ({ hasError, ...rest }: IProps) {
    return (
        <S.Field 
            hasError={hasError}
            {...rest} 
        />
    );
};