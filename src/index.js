import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TrackerPage from "./pages/TrackerPage";
import TrackerPlanetPage from "./pages/TrackerPlanetPage";
import ProfilePage from "./pages/ProfilePage";

import './style.css';

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/tracker" component={TrackerPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/tracker_planet" component={TrackerPlanetPage} />
            </Switch>
        </ BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));