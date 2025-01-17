import React from 'react'

import {useState}from 'react'
import {Button,Form,Container} from 'react-bootstrap';
const Login = ({setAuthenticate}) => {
    const loginUser = (event)=>{
        event.preventDefault();
        console.log("login user function issue")
        return setAuthenticate(true);
        console.log(setAuthenticate)
    }
  
  return (
    <Container>
    <Form className="Form-box" onSubmit={loginUser} >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="danger" type="submit" className="login-button-style" >
      로그인 
    </Button>
  </Form>
  </Container>
  )
}

export default Login