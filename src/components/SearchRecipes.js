import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

export default class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: "",
      dish: ""
    };
  }
  search() {
    let { ingredients, dish } = this.state;

    // let ingredients = this.state.ingredients;
    // let dish = this.state.dish;

    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log('state', this.state,"url", url);
  }
  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>{" "}
          <FormControl 
            type="text"
            placeholder="Chicken, Salsa" 
            onChange={event => this.setState({ingredients: event.target.value})}
            />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>{" "}
          <FormControl 
            type="text"
            placeholder="Tacos"
            onChange={event => this.setState({ dish: event.target.value })} 
            />
        </FormGroup>{" "}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}
