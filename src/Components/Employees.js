import React, { Component } from "react";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, firstName: "ahmad", lastName: "ali" },
        { id: 2, firstName: "hassan", lastName: "mahmoud" },
        { id: 3, firstName: "jallal", lastName: "khaled" },
      ],
      showUpdateModal: false,
      showDeleteModal: false,

      id: "",
      firstName: "",
      lastName: "",
    };
  }
  handleClose = () => {
    this.setState({ showUpdateModal: false, showDeleteModal: false });
  };
  handleUpdate = (item) => {
    this.setState({ id: item.id, showUpdateModal: true });
  };
  handleDelete = (item) => {
    this.setState({ id: item.id, showDeleteModal: true });
  };
  handleFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleLastName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleUpdatForm = () => {
    let newList = [];
    this.state.list.map((item) => {
      if (item.id == this.state.id) {
        item.firstName = this.state.firstName;
        item.lastName = this.state.lastName;
        newList.push(item);
      } else {
        newList.push(item);
      }
    });
    this.setState({ list: newList,showUpdateModal: false });
  };
  handleDeleteForm = () => {
    let newList = [];
    this.state.list.map((item) => {
      if (item.id != this.state.id) {
        newList.push(item);
      }
    });
    this.setState({ list: newList,showDeleteModal: false });
  };
  render() {
    return (
      <>
        <table>
          <tr>
            <th>Fist Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
          {this.state.list.map((item) => {
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleUpdate(item);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      this.handleDelete(item);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        {this.state.showUpdateModal && (
          <UpdateModal
            showUpdateModal={this.state.showUpdateModal}
            handleClose={this.handleClose}
            handleFirstName={this.handleFirstName}
            handleLastName={this.handleLastName}
            handleUpdatForm={this.handleUpdatForm}
          />
        )}
        {this.state.showDeleteModal && (
          <DeleteModal
            showDeleteModal={this.state.showDeleteModal}
            handleClose={this.handleClose}
            handleDeleteForm={this.handleDeleteForm}
          />
        )}
      </>
    );
  }
}
