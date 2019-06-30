import React, {Component} from 'react';

import App from './App';

import {BrowserRouter} from 'react-router-dom';

import './index.css';

import { initFirebase } from './shared/Firebase';

export default class Root extends Component {
    constructor() {
        super();
        initFirebase();
    }

    render() {
        return (
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
    }
}
/*
const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
*/