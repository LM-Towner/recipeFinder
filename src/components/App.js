import React, { Component } from "react";
import SearchRecipes from "./SearchRecipes";
import "../styles/index.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Find a recipe!</h2>
        <SearchRecipes />
      </div>
    );
  }
}
