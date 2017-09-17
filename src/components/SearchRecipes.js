import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

export default class SearchRecipes extends Component {
    render() {
        return (
           <Form inline>
            <FormGroup>
              <ControlLabel>
                Ingredients
              </ControlLabel> 
              {" "}
              <FormControl type="text" placeholder="Chicken, Salsa" />
            </FormGroup> 
            <FormGroup>
              <ControlLabel>Dish</ControlLabel>
              {" "}
              <FormControl type="text" placeholder="Tacos"></FormControl>
            </FormGroup>
            {" "}
            <Button>Submit</Button>
          </Form>
        )
    }
}
