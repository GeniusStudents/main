import React from "react";
import { Modal,Button,Form } from "react-bootstrap";




export default function Register(props) {


  return (
    <>
    

      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Registeration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Form.Label  className="mt-2" >UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                autoFocus
              />

            <Form.Label  className="mt-2">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email address"
                autoFocus
              />

              <Form.Label  className="mt-2">Pasword</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                autoFocus
              />
               <Form.Label  className="mt-2">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your password again"
                autoFocus
              />
            </Form.Group>

          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.show}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
