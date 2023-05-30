import React from 'react'
import { Modal,Button,Form } from "react-bootstrap";
export default function Login(props) {
  return (
    <div>

        
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title className='justify-content-center'>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>UserName Or Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Or Password"
                autoFocus
              />
               <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your password"
                autoFocus
              />
            </Form.Group>

          
          </Form>
        </Modal.Body>
        <Modal.Footer className='align-item-center'>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.show}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
       


    </div>
  )
}
