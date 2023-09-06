import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./Login.css"; // Create a separate CSS file for styling
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(user);
    if (!user.email || !user.password) {
      setError("Please Filled All Feilds");
      return;
    }
    setError("");
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        alert("User Successfully Login");
        navigate("/");

        console.log(res);
      })
      .catch((res) => {
        alert("Invalid Credentials");
        console.log(res);
      });
  };

  return (
    <div className="login-form-container">
      <Card className="login-card">
        <Card.Body>
          <Card.Title>
            <h2>Login</h2>
            <h6 className="text-decoration-underline " style={{ color: "red" }}>
              {error}
            </h6>
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
