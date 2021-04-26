import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import authActions from "../redux/actions/auth.actions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function LoginPage() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");

    dispatch(authActions.loginRequest(formData));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col></Col>
        <Col>
          <h3 className="text-center">Sign In</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
