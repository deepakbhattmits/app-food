import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import TextField from "../Resuable/TextField"
import Button from '../Resuable/Button'

const initialState= {
  fields: {},
  errors: {},
  clicked: false
}
class Login extends Component {
  state = initialState
  
  handleChange = (e) =>{
    let fields = this.state.fields;
    const { name, value } = e.target;
    fields[name] = value;
    this.setState({
      fields
    }, ( ) => this.validateForm() );

  }

  handleSubmit = (e) =>{
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
        fields["email"] = '';
        fields["password"] = '';
        this.setState({fields, clicked: true});
               
    }

  }

  validateForm = () => {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = true;
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = true;
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = true;
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = true;
      }
    }

    this.setState({
      errors
    });
    return formIsValid;

  }

render() {
    return (
      <div className="loginForm">
        {this.state.clicked ? <Redirect to={`/home/${this.state.fields}`} /> : null}
        <div className="login-form">
          <form className="ui form" onSubmit={ this.handleSubmit }>
            <div className={`field ${this.state.errors.email ? "error" : ""}`}>
              <TextField
              type="text"
              name="email"
              value={this.state.fields.email === undefined ? '' : this.state.fields.email}
              placeholder="Username"
              onChange={ this.handleChange }
            />
            </div>
            <div className={`field ${this.state.errors.email ? "error" : ""}`}>
            <TextField
              type="password"
              name="password"
              value={this.state.fields.password=== undefined ? '': this.state.fields.password}
              placeholder="Passowrd"
              onChange={ this.handleChange }
            />
            </div>
            <Button className="ui button blue" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
