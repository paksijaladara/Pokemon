import React, { Component } from "react";
import ListPokemon from "../pokemon/listPokemon";

export default class dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <ListPokemon />
        </div>
      </div>
    );
  }
}
