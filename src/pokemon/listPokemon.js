import React, { Component } from "react";
import CardPokemon from "./cardPokemon";
import Axios from "axios";

export default class listPokemon extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100",
    pokemon: null
  };

  async componentDidMount() {
    const response = await Axios.get(this.state.url);
    this.setState({ pokemon: response.data["results"] });
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <CardPokemon
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}
