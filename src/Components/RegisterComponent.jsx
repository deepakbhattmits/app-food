import React, { Component } from 'react';
import TextField from '../Resuable/TextField'
import Button from '../Resuable/Button'
import Error from '../Resuable/Error'
class RegisterForm extends Component {
      state = {
        fields: {},
        errors: {}
      }
    handleChange = (e) => {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      }, ()=> this.validateForm() );

    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields})
        }

    }

    validateForm = () => {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "* Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "* Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "* Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "* Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "* Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "* Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "* Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "* Please enter secure and strong password.";
        }
      }

      this.setState({
        errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div className="main-registration-container">
     <div className="register">
        <h4 className="ui dividing header">Registration page</h4>
        <form className='ui form' method="post"  name="userRegistrationForm"  onSubmit= {this.handleSubmit} >
        <div className="two fields">
          <div className={`field ${this.state.errors.username ? 'error' : ''}`} >
          <label>Name</label>
          <TextField 
            type="text" 
            name="username" 
            value={this.state.fields.username === undefined ? '': this.state.fields.username} 
            onChange={this.handleChange} 
            placeholder='please enter Username'
          />
        
        <Error>{this.state.errors.username}</Error>
        </div>
        <div className={`field ${this.state.errors.emailid ? 'error' : ''}`} >
          <label>Email ID:</label>
          <TextField 
            type="text" 
            name="emailid" 
            value={this.state.fields.emailid === undefined ? '' : this.state.fields.emailid} 
            onChange={this.handleChange}  
            placeholder='please enter Email'
          />
       
       <Error>{this.state.errors.emailid}</Error>
        </div>
        </div>
        <div className='two fields'>
        <div className={`field ${this.state.errors.mobileno ? 'error':''}`}>
          <label>Mobile No:</label>
          <TextField 
            type="text" 
            name="mobileno" 
            value={this.state.fields.mobileno=== undefined?'': this.state.fields.mobileno} 
            onChange={this.handleChange}   
            placeholder='please enter Mobile Number'
          />
          <Error>{this.state.errors.mobileno}</Error>
        </div>
        <div className={`field ${this.state.errors.password ? 'error':''}`}>
        <label>Password</label>
          <TextField 
            type="password" 
            name="password" 
            value={this.state.fields.password=== undefined? '': this.state.fields.password} 
            onChange={this.handleChange} 
            placeholder='please enter Password'
          />
          <Error>{this.state.errors.password}</Error>
        </div>
        </div>
        <Button type="submit" className="ui button blue">
          submit
        </Button>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;