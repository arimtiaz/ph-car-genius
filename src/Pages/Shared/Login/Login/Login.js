import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate('')

    const handleRegister = e =>{
        e.preventDefault();
    }

    const navigateToRegister = e =>{
        navigate('/register')
    }
  return (
    <div className="shadow p-3 mb-5 bg-white rounded mx-auto mt-5" style={{ width: '32rem' }}>
      <h2 className="text-primary text-center">Login Here,</h2>

      <Form onSubmit={handleRegister}>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New To Genius Car? <Link to='/register' className="text-danger pe-auto text-decoration-none" onClick={navigateToRegister}>Register here</Link></p>
    </div>
  );
};

export default Login;
