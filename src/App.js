import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import LanguageChange from "./LanguageChange";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/lang" component={LanguageChange} />
        </div>
      </Router>
    );
  }
}

export default App;
