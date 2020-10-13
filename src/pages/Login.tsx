import React, { FC } from 'react';
import { GoogleLogin } from 'react-google-login';
import { UserInterface } from '../models/userInterface';

interface Props {
    login: (user:UserInterface) => void;
}

const Login: FC<Props> = ({login}) => {

    const responseGoogle = async(response:any) => {
        try {
            const userData = await response.profileObj
            console.log(userData)
            userData && login(userData) 
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px',
        }}>
            <h1>Login Version</h1>
            <GoogleLogin
                    clientId="635810294506-bmomp5mvp0fga3akpmu99al6v5alli8f.apps.googleusercontent.com"
                    buttonText="Ingresar con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
        </div>
    )
}

export default Login;
