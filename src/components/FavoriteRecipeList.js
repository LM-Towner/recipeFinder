import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";

class FavoriteRecipeList extends Component {
  render() {
    return (
      <div>
        <h4>Favorite Recipes:</h4>
        <div>
          {this.props.favoriteRecipes.map((recipe, key) => {
            return (
              <RecipeItem 
              key={key} 
              recipe={recipe}
              favoriteButton = {false}
               />
              );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteRecipes: state.favoriteRecipes
  };
}
export default connect(mapStateToProps, null)(FavoriteRecipeList);
