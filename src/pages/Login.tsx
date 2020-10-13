import React, { FC } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import { UserInterface } from '../models/userInterface';
import GoogleButton from '../components/googleButton/GoogleButton';

interface Props {
    login: (user: UserInterface) => void;
}

const clientId = '635810294506-bmomp5mvp0fga3akpmu99al6v5alli8f.apps.googleusercontent.com';

const Login: FC<Props> = ({ login }) => {
    const onSuccess = (res: any) => {
        console.log(res.profileObj);
        login(res.profileObj)
        refreshTokenSetup(res);
    };

    const onFailure = (res: any) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login`
        );
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px',
        }}>
            <h1>Ingreso</h1>
            <GoogleButton onClick={signIn} text='Iniciar Sesión' />
        </div>
      
    )
}

export default Login;
