import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Counter, Home, TodoList, Src} from "./pages";

export default class App extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/todo" component={TodoList}/>
                <Route path="/src" component={Src}/>
            </div>
        )
    }
}