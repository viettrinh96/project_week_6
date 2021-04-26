import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import authActions from "../redux/actions/auth.actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import routeActions from "../redux/actions/route.actions";
export default function RegisterPage() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    avatarUrl: "",
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const redirectTo = useSelector((state) => state.route.redirectTo);
  console.log("res", redirectTo);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2, avatarUrl } = formData;
    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      dispatch(
        authActions.registerAccount({
          name,
          email,
          password,
          avatarUrl,
        })
      );
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);
      dispatch(routeActions.removeRedirectTo());
    }
  }, [redirectTo, history, dispatch]);

  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col></Col>
        <Col>
          <h3 className="text-center">Sign Up</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Your Avatar</Form.Label>
              <Form.Control
                type="link"
                name="avatarUrl"
                placeholder="Enter avatar url"
                value={formData.avatarUrl}
                onChange={handleChange}
              />
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
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
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="password2"
                type="password"
                placeholder="Confirm your password"
                value={formData.password2}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Register
            </Button>
          </Form>
          <p>
            You have an account? <Link to="/login">Sign in</Link>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
