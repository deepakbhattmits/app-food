import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "../Resuable/TextField";
import DropDown from "../Resuable/DropDown";
import Button from "../Resuable/Button";
import { saveFormData1 } from "../Actions";
const initialState = {
  fields: {},
  errors: {},
  options: {
    0: "-- CHOOSE -- ",
    1: "agra",
    2: "bangalore",
    3: "delhi",
    4: "gwalior",
    5: "chennai",
    6: "mangalore"
  }
};
class EditForm extends Component {
  state = initialState;
  renderEditData = ( data ) => { 
    return this.props && this.props.data.map((el,i) => 
      // console.log("Edit From : ", el['emailid'])
      el[data]
    )
  }
  handleChange = e => {
    const { name, value } = e.target;
    let fields = this.state.fields;
    fields[name] = value;
    this.setState(
      {
        fields
      },
      () => this.validate()
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    let fields = {};
    fields["FirstName"] = "";
    fields["LastName"] = "";
    fields["Dob"] = "";
    fields["City"] = "";
    let options = initialState.options;
    console.log("Submit : ", fields, options);
    if (this.validate()) {
      this.props.saveFormData1(this.state.fields);
      this.setState({
        fields,
        options
      });
    }
  };
  validate = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["FirstName"]) {
      formIsValid = false;
      errors["FirstName"]= true
    }
    if (!fields["LastName"]) {
      formIsValid = false;
      errors["LastName"]= true
    }
    if (!fields["Dob"]) {
      formIsValid = false;
      errors["Dob"]= true
    }
    if (!fields["City"]) {
      formIsValid = false;
      errors["City"]= true
    }
    this.setState({
      errors
    });
    return formIsValid;
  };
  render() {
    const errors = this.state.errors;
    const fields = this.state.fields;
    const options = this.state.options;
       
    return (
      <div className="dataForm">
        { console.log(this.renderEditData('username')) }
        <form className="ui form " onSubmit={this.handleSubmit}>
          <div className={`field ${errors.FirstName ? "error" : ""}`}>
            <TextField
              type="text"
              name="FirstName"
              placeholder="First Name"
              value={fields && fields.username ? fields.username : this.renderEditData('FirstName')}
              onChange={this.handleChange}
            />
          </div>
          <div className={`field ${errors.LastName ? "error" : ""}`}>
            <TextField
              type="text"
              name="LastName"
              placeholder="Last Name"
              value={fields && fields.LastName ? fields.LastName : this.renderEditData('LastName')}
              onChange={this.handleChange}
            />
          </div>
          <div className={`field ${errors.Dob ? "error" : ""}`}>
            <TextField
              type="date"
              name="Dob"
              placeholder="Date Of Birth"
              value={fields && fields.Dob ? fields.Dob : this.renderEditData('Dob')}
              onChange={this.handleChange}
            />
          </div>
          <div className={`field ${errors.City ? "error" : ""}`}>
            <DropDown
              name="City"
              placeholder="City"
              value={fields && fields.City ? fields.City :this.renderEditData('City') }
              onChange={this.handleChange}
              options={options}
            />
          </div>
          <div className={`field`}>
            <Button className="ui button blue" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {};
// };
const mapDispatchToProps = dispatch => ({
  saveFormData1: data => dispatch(saveFormData1(data))
});

export default connect(
  null,
  mapDispatchToProps
)(EditForm);
