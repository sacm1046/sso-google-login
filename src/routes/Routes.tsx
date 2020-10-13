import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesIn from './RoutesIn'
import RoutesOut from './RoutesOut'
import { UserInterface } from '../models/userInterface';



const Routes = () => {
    
    const [ isAuth, setIsAuth ] = useState<boolean>(false)
    const [ user, setUser ] = useState<UserInterface>(Object)
    const logout = () => {
        setIsAuth(false)
        setUser({
            name: '',
            imageUrl: ''
        })
    }
    const login = (user:UserInterface) => {
        setIsAuth(true)
        setUser(user)
    }

    return (
        <Router>
            {
                isAuth?(
                    <RoutesIn {...{logout, user}}/>
                ):(
                    <RoutesOut {...{login}}/>
                )
            }     
        </Router>
    )
}

export default Routes;
