import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import RomanNumeralComponent from './RomanNumeralComponent';
import MaxStackComponent from './MaxStackComponent';
import { Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

const routes = (
    <BrowserRouter>
        <div>
            <Route exact path="/">
                <Redirect to="/app" />
            </Route>
            <Route path="/app" component={App} />
            <Route path="/roman-numerals" component={RomanNumeralComponent} />
            <Route path="/max-stack" component={MaxStackComponent} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(
    routes,
    document.getElementById('root')
);