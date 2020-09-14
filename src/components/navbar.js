import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top"
          style={{
            backgroundColor: "#f7f7f7"
          }}
        >
          <a
            className="navbar-brand col-sm-3 col-md-6 mr-0 align-item-center"
            style={{ color: "black", fontFamily: "bold", fontSize: "30px" }}
            href="/"
          >
            Pokemon
          </a>
        </nav>
      </div>
    );
  }
}
