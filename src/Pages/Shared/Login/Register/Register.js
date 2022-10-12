import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('')


    const handleSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
    }

    const navigateToRegister = e =>{
        navigate('/login')
    }
  return (
    <div className="shadow p-3 mb-5 bg-white rounded mx-auto mt-5" style={{ width: '32rem' }}>
      <h2 className="text-primary text-center">Login Here,</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateToRegister}
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
