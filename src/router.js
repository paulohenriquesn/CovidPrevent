import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'

import Home from './pages/home'
import Test from './pages/test'

const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/test" component={Test}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;