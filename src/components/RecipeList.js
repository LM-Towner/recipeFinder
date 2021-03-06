import React,{ Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem  from './RecipeItem';

class RecipeList extends Component {
  render(){
    console.log('this.props', this.props);
    return(
      <div>
       {
         this.props.recipes.map((recipe,key) => {
           return(
            <RecipeItem 
            key={key} 
            recipe={recipe}
            favoriteButton={true}
             />
           )
         })
       }
      </div>
    )
  }
}
function mapStateToProps(state) { 
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);