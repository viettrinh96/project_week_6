import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
export default function PublicNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logotw.png"
          width="30"
          className="d-inline-block align-top"
        />{" "}
        Twitter
      </Navbar.Brand>
      <div>
        <Link className="change-link" to="/register">
          Sign Up
        </Link>{" "}
        <Link className="change-link" to="/login">
          Sign In
        </Link>
      </div>
    </Navbar>
  );
}
