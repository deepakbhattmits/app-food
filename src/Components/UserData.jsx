import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Button from "../Resuable/Button";
import Modal from '../Resuable/Modal';
class UserData extends Component {
  state = {
    visible: false,
    edit: []
  };
  close = e => {
    console.log("close : ", e);
    this.setState({ visible: false });
  };
  saveData = () => {
    console.log("want save");
  };
  wantEdit = e => {
    const selectedId = e.target.id;
    const selectedData = this.props && this.props.data.filter((el, i) =>
      i === parseInt(selectedId) ? el : ""
    );

    this.setState({ visible: true, edit: selectedData });
  };
  wantDelete = e => {
    console.log("remove : ", e.target.id);

    this.setState({ visible: true });
  };
  renderRow = () => {
    if (this.props === undefined || this.props.data.length === 0) {
      return (
        <tr>
          <td>Loading...</td>
        </tr>
      );
    }
    return (
      this.props && this.props.data.map((el, i) => {
        return (
          <tr key={i}>
            <td>{el.emailid}</td>
            <td>{el.mobileno}</td>
            <td>{el.password}</td>
            <td>{el.username} </td>
            <td>
              <Button
                id={i}
                className="ui button blue"
                onClick={this.wantEdit}
              >
                edit
              </Button>
              <Button
                id={i}
                className="ui button red"
                onClick={this.wantDelete}
              >
                Delete
              </Button>
            </td>
          </tr>
        );
      })
    );
  };
  render() {
    console.log("TEST UserData : ", this.props.data);
    return (
      <Fragment>
        <h2 className='ui first header'>User's</h2>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Email ID</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          { this.renderRow()}
          </tbody>
        </table>
        <Modal
          visible={this.state.visible}
          close={this.close}
          data={this.state.edit}
          save={this.save}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.Meal.formData
  };
};
// const mapDispatchToProps = dispatch => {
//   return {};
// };
export default connect(
  mapStateToProps,
  null
)(UserData);
