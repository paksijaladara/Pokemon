import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import BackgroundImage from "./pattern.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemon from "./pokemon/Pokemon";

function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${BackgroundImage})` }}>
        <Navbar />{" "}
        <div className="container">
          <Switch>
            <Route exact path={"/"} component={Dashboard} />
            <Route exact path={"/pokemon/:pokemonIndex"} component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
