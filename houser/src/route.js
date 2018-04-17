import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../src/component/dashboard/Dashboard';
import Wizard from '../src/component/wizard/Wizard';

export default (
    <Switch>
        <Route exact path = '/' component = {Dashboard} />
        <Route path = '/wizard' component = {Wizard} />    
    </Switch>
)