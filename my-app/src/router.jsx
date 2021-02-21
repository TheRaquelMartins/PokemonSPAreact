import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import ListPage from './page/list';
import DetailsPage from './page/details';

export default function () {

    return (

        <HashRouter>
            <Switch>
                <Redirect exact from='/' to='/list' />
                <Route exact path='/list' component={ListPage} />
                <Route exact path='/details/:id' component={DetailsPage} />
            </Switch>
        </HashRouter>
    );
};