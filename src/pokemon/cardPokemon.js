import React, { Component } from "react";
import Styled from "styled-components";
import Spinner from "../pokemon/805.gif";
import { Link } from "react-router-dom";

const Image = Styled.img`
    width: 5em;
    height: 5em;
`;

const StyledLink = Styled(Link)`
text-decoration: none;
color: black;
&:focus,
&:hover,
&:visited,
&:link,
&:active{
    text-decoration: none;
}
`;

export default class cardPokemon extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="col-md-3 mb-5 mt-3">
        <StyledLink to={`/pokemon/${this.state.pokemonIndex}`}>
          <div className="card">
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
            {this.state.imageLoading ? (
              <img
                src={Spinner}
                style={{ width: "5em", height: "5em" }}
                className="card-img-top rounded mx-auto d-block mt-2"
                alt="pokemon"
              />
            ) : null}
            <Image
              className="card-image-top rounded mx-auto mt-2"
              onLoad={() => this.setState({ imageLoading: false })}
              src={this.state.imageUrl}
              style={this.state.imageLoading ? null : { display: "block" }}
            />

            <div className="card-body mx-auto">
              <h2 className="card-title">{this.state.name}</h2>
            </div>
          </div>
        </StyledLink>
      </div>
    );
  }
}
