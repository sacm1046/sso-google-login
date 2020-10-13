import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { UserInterface } from '../models/userInterface';

interface Props {
    logout: () => void;
    user: UserInterface;
}

const RoutesIn: FC<Props> = ({ logout, user }) => {
    return (
        <Switch>
            <Route exact path={'/dashboard'} component={() => <Dashboard {...{logout, user}} />} />
            <Redirect to={'/dashboard'} />
        </Switch>
    )
}

export default RoutesIn;
