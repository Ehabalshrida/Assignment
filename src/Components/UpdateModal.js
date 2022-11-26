import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default class UpdateModal extends Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showUpdateModal}
          onHide={() => {
            this.props.handleClose();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Fields</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                this.props.handleUpdatForm(e);
              }}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="first Name"
                  onChange={(e) => {
                    this.props.handleFirstName(e);
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => {
                    this.props.handleLastName(e);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Edit{" "}
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.props.handleClose();
              }}
            >
              Cancle
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
