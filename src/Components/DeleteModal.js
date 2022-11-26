import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class DeleteModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showDeleteModal} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Field</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            If you clicked on Delete Button This Field will be removed!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Cancle
            </Button>
            <Button variant="primary" onClick={this.props.handleDeleteForm}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
