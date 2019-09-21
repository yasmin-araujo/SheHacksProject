import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
// import ManagementPage from "./pages/ManagementPage";
// import VideosPage from "./pages/VideosPage";

import './style.css';

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/login" component={LoginPage} />
                <Route path="/management" component={ManagementPage} /> */}
            </Switch>
        </ BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));