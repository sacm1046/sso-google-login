import React, { FC } from 'react';
import { useGoogleLogout } from 'react-google-login';
import GoogleButton from '../components/googleButton/GoogleButton';
import { UserInterface } from '../models/userInterface'

interface Props {
    logout: () => void;
    user: UserInterface;
}

const clientId = '635810294506-bmomp5mvp0fga3akpmu99al6v5alli8f.apps.googleusercontent.com';

const Dashboard: FC<Props> = ({ logout, user }) => {

    const onLogoutSuccess = () => {
        console.log('Logged out Success');
        logout();
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px',
        }}>
            <h1>Dashboard</h1>
            <img
                src={user.imageUrl}
                alt="Profile"
                style={{
                    borderRadius: '50%',
                }} />
            <p>{user.name}</p>
            <GoogleButton onClick={signOut} text='Cerrar Sesión' />
        </div>
    )
}

export default Dashboard;
