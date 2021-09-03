import { useHelloQuery } from "./generated/graphql";
import React from "react";
import { gql } from "apollo-boost";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {Home} from "./pages/Home"
import {Register} from "./pages/Register"
import {Login} from "./pages/Login"

function App() {
  return (
    <div className="">
     
    
    <BrowserRouter>
    <div className="">
        <Link to="/register">register </Link>
        <Link to="/login">login </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
