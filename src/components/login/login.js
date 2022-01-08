import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const logout = () => {
    localStorage.removeItem("userInfo");
    // const history = useHistory();
    // history.push("/login");
  };

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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>This is the Login page</h1>
      <div className="loginContainer">
        {loading && <h1>Loading...</h1>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
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
    </div>
  );
}

export default Login;