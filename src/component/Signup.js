import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./Signup.css";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("Filled all Feilds");
      return;
    }
    setError("");
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((res) => {
        alert(res.message);
        console.log(res);
      });
  };

  const googleHandler = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("Login SUccesfully");
        navigate("/");
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form className="signup-form" onSubmit={handleSubmit}>
        <Card.Title>
          <h2>Register Here</h2>
          <h6>{error}</h6>
        </Card.Title>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div style={{ marginTop: "8px" }}>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
        <div style={{ marginTop: "12px", borderRadius: "10px" }}>
          <GoogleButton onClick={googleHandler} />
        </div>
      </Form>
    </div>
  );
};

export default Signup;
