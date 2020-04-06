import React, { Component } from "react";

export default class searchbox extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <input type="search" placeholder="search pokemon" />
      </div>
    );
  }
}
