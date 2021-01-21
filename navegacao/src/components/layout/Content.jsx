import './Content.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import About from '../../views/exemples/About'
import Home from '../../views/exemples/Home'
import Param from '../../views/exemples/Param';
import NotFound from '../../views/exemples/NotFound';

const Content = props => (
    <main className="Content">
        <Switch>
            <Router exact path="/">
                <Home/>
            </Router>
            <Router path="/about">
                <About/>
            </Router>
            <Router path="/param/:id">
                <Param/>
            </Router>
            <Router path="*">
                <NotFound/>
            </Router>
        </Switch>
    </main>
)

export default Content;