/* eslint-disable no-use-before-define */
import * as React from 'react';

import { TextField } from '../../components/Form/TextField';
import { Notify } from '../../components/Notify';

import * as S from './styles';

export function SignIn() {
    const [usernameFieldValue, setUsernameFieldValue] = React.useState<string>('');
    const [passwordFieldValue, setPasswordFieldValue] = React.useState<string>('');
    const [invalidUsername, setInvalidUsername] = React.useState<boolean>(false);
    const [invalidPassword, setInvalidPassword] = React.useState<boolean>(false);
    const [isValidForm, setIsValidForm] = React.useState<boolean>(false);
    const [showNotifyError, setShowNotifyError] = React.useState<boolean>(false);

    const handleSubmitForm = () => {
        const USERNAME_FIELD_IS_VALID = usernameFieldValue && usernameFieldValue !== '';
        const PASSWORD_FIELD_IS_VALID = passwordFieldValue && passwordFieldValue !== '';

        if (!USERNAME_FIELD_IS_VALID) {
            setIsValidForm(false);
            setInvalidUsername(true);
            setShowNotifyError(true);
            return;
        }

        if (!PASSWORD_FIELD_IS_VALID) {
            setIsValidForm(false);
            setInvalidPassword(true);
            setShowNotifyError(true);
            return;
        }

        setIsValidForm(true);
        setInvalidUsername(false);
        setInvalidPassword(false);

        if (isValidForm) console.log('Sucesso');
    };

    return (
        <React.Fragment>
            <Notify 
                show={showNotifyError} 
                type='error' 
                text='Credenciais incorretas'
                onClose={() => setShowNotifyError(false)}
            />

            <S.Container>
                <h1>Seja Bem Vindo</h1>

                <TextField
                    placeholder='Informe seu usuario'
                    type='text'
                    hasError={invalidUsername}
                    value={usernameFieldValue}
                    onChange={event => setUsernameFieldValue(event.target.value)}
                />
                <TextField
                    placeholder='Informe sua senha'
                    type='password'
                    hasError={invalidPassword}
                    value={passwordFieldValue}
                    onChange={event => setPasswordFieldValue(event.target.value)}
                />

                <S.Button onClick={handleSubmitForm}>
                    Entrar
                </S.Button>
            </S.Container>
        </React.Fragment>
    );
};