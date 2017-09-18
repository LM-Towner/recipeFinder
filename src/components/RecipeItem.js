import React, { Component } from "react";
import { connect } from "react-redux";
import { favoriteRecipes } from "../actions";

class RecipeItem extends Component {
  constructor() {
    super();
    this.state = {
      favorited: false
    };
  }

  favorite(recipe) {
    this.props.favoriteRecipes(recipe);
    this.setState({
      favorited: true
    });
  }

  render() {
    let { recipe } = this.props;
    return (
      <div className="recipe-item">
        {this.state.favorited ? (
          <div className="star">&#9733;</div>
        ) : (
          <div onClick={() => this.favorite(recipe)}>
            <div className="star"> &#9734;</div>
          </div>
        )}
        <a href={recipe.href}>
          <h4 className="recipe=text">{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>

        <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title} />
      </div>
    );
  }
}

export default connect(null, { favoriteRecipes })(RecipeItem);
