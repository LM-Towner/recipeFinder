import React, { Component } from "react";

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;
    return (
 
      <div className="recipe-item">
        <a href={recipe.href}>
          <h4 classname="recipe=text">{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>

        <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title} />
      </div>
    );
  }
}

export default RecipeItem;
