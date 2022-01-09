import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      window.location.reload();
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="loginContainer">
        {loading && <h1>Loading...</h1>}
        <h2>Login</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={password}
              placeholder="your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
      </div>
      <Link className="p" to="/signUp">
        Don't have an account? Sign up.
      </Link>
      <p>Forgot password?</p>
    </div>
  );
}

export default Login;
