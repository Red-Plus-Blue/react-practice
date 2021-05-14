import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

import RomanNumeralComponent from './RomanNumeralComponent';
import MaxStackComponent from './MaxStackComponent';
import AnagramsComponent from './AnagramsComponent';
import StringCompressionComponent from './StringCompressionComponent';

const routes = (
    <BrowserRouter>
        <div>
            <Route exact path="/">
                <Redirect to="/app" />
            </Route>
            <Route path="/app" component={App} />
            <Route path="/roman-numerals" component={RomanNumeralComponent} />
            <Route path="/max-stack" component={MaxStackComponent} />
            <Route path="/anagrams" component={AnagramsComponent} />
            <Route path="/string-compression" component={StringCompressionComponent} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(
    routes,
    document.getElementById('root')
);