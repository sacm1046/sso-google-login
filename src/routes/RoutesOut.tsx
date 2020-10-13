import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import { UserInterface } from '../models/userInterface';


interface Props {
    login: (user:UserInterface) => void;
}

const RoutesOut: FC<Props> = ({login}) => {
    return (
        <Switch>
            <Route exact path={'/'} component={() => <Login {...{login}} />} />
            <Redirect to={'/'} />
        </Switch>
    )
}

export default RoutesOut;
