import React, { Component } from "react";
import { Link } from "react-router-dom";
import { i18n } from "./../translations/i18n";

export default class NavBar extends Component {
  constructor(prop) {
    super(prop);
    this.handleOnclick = this.handleOnclick.bind(this);

    this.state = {
      listOpen: false,
      lang: "en",
      isLoading: true,
    };
  }

  handleOnclick = (e) => {
    e.preventDefault();
    this.setState({
      lang: e.target.value,
      isLoading: false,
    });
    i18n.changeLanguage(e.target.value);
  };

  render() {
    return (
      <div align="center">
        <Link to="/lang">Click Here to Change language</Link>
        <hr />
        <button value="en" onClick={this.handleOnclick}>
          English
        </button>
        {"  "}
        <button value="es" onClick={this.handleOnclick}>
          Hindi
        </button>
      </div>
    );
  }
}
