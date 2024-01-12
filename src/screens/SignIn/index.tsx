/* eslint-disable no-use-before-define */
import * as React from 'react';

import { TextField } from '../../components/Form/TextField';

import * as S from './styles';

export function SignIn() {
    const [usernameFieldValue, setUsernameFieldValue] = React.useState<string>('');
    const [passwordFieldValue, setPasswordFieldValue] = React.useState<string>('');
    const [invalidUsername, setInvalidUsername] = React.useState<boolean>(false);
    const [invalidPassword, setInvalidPassword] = React.useState<boolean>(false);
    const [isValidForm, setIsValidForm] = React.useState<boolean>(false);

    const handleSubmitForm = () => {
        const USERNAME_FIELD_IS_VALID = usernameFieldValue && usernameFieldValue !== '';
        const PASSWORD_FIELD_IS_VALID = passwordFieldValue && passwordFieldValue !== '';

        if (!USERNAME_FIELD_IS_VALID) {
            setIsValidForm(false);
            setInvalidUsername(true);
            return;
        }

        if (!PASSWORD_FIELD_IS_VALID) {
            setIsValidForm(false);
            setInvalidPassword(true);
            return;
        }

        setIsValidForm(true);
        setInvalidUsername(false);
        setInvalidPassword(false);
    };

    return (
        <S.Container>
            <h1>Welcome to SpeedLoad</h1>

            <TextField 
                placeholder='type your username'
                type='text'
                hasError={invalidUsername}
                value={usernameFieldValue}
                onChange={event => setUsernameFieldValue(event.target.value)}
            />
            <TextField 
                placeholder='type your password' 
                type='password'
                hasError={invalidPassword}
                value={passwordFieldValue}
                onChange={event => setPasswordFieldValue(event.target.value)}
            />

            <S.Button onClick={handleSubmitForm}>
                SignIn
            </S.Button>
        </S.Container>
    );
};