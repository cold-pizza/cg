import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Login from "./view/login";
import Main from "./view/main";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => <Login />} />
                <Route path="/main" render={() => <Main />} />
            </Switch>
        </div>
    );
}

export default App;
