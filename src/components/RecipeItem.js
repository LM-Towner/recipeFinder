import React, { Component } from "react";
import {connect } from 'react-redux'
import { favoriteRecipes } from '../actions';

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;
    return (
      <div className="recipe-item">
        <div onClick={()=> this.props.favoriteRecipes(recipe)}>
         <div className='star'> &#9734;</div>
        </div>
        <a href={recipe.href}>
          <h4 className="recipe=text">{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>

        <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title} />
      </div>
    );
  }
}

export default connect(null, { favoriteRecipes})(RecipeItem);
