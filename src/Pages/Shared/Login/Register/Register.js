import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../../firebase.init";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate('')

    const handleRegister = e =>{
        
    }

    const navigateToLogin = e =>{
        navigate('/login')
    }
  return (
    <div className="shadow p-3 mb-5 bg-white rounded mx-auto mt-5" style={{ width: '32rem' }}>
      <h2 className="text-primary text-center">Login Here,</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
          <Form.Text className="text-muted">
            First and Last Name
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control

            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={() => createUserWithEmailAndPassword(email, password)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateToLogin}
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
