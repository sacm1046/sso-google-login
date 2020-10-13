import React, { FC } from 'react';
import { GoogleLogout } from 'react-google-login';
import { UserInterface } from '../models/userInterface'

interface Props {
    logout: () => void;
    user: UserInterface;
}

const Dashboard: FC<Props> = ({ logout, user }) => {
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
            <GoogleLogout
                clientId="635810294506-bmomp5mvp0fga3akpmu99al6v5alli8f.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
            ></GoogleLogout>
        </div>
    )
}

export default Dashboard;
