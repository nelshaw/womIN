import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-scroll";
import "./signup.css";
import { Link as LinkR, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isMentor, setIsMentor] = useState(false);
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");
  const [coi, setCoi] = useState([]);
  const [yoe, setYoe] = useState("");
  const [techstack, setTechStack] = useState([]);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const techOptions = [
    "Java",
    "C++",
    "Python",
    "R",
    "HTML",
    "CSS",
    "JavaScript",
    "Ruby",
    "AI",
    "Machine Learning",
    "React",
    "Angular",
  ];

  const companies = [
    "Amazon",
    "Bell",
    "Dynatrace",
    "Hedera Hashgraph",
    "Nokia",
    "Scotiabank",
    "Ubisoft",
    "CGI",
    "Rangle.io",
    "Geotab",
    "Loblaw",
    "CIBC",
    "Architech",
  ];

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      setLoading(true);
      console.log(techstack);
      if (isMentor) {
        const { data } = await axios.post(
          "http://localhost:5000/api/users",
          {
            name,
            email,
            password,
            university,
            isMentor,
            program,
            year,
            company,
            yoe,
            techstack,
          },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/api/users",
          { name, email, password, university, program, year, coi, techstack },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
      }
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signupContainer">
        <h1>womIN</h1>
        {loading && <h1>Loading...</h1>}
        <h2>Create an Account</h2>
        <Form>
          <Form.Group controlId="name">
            <Form.Control
              type="name"
              value={name}
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
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
          <Form.Group controlId="confirmPassword">
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Link
            className="signupBtn"
            activeClass="active"
            to="isMentor"
            spy={true}
            smooth={true}
            // onClick={(e) => setMentorHidden(false)}
          >
            Sign Up
          </Link>

          <LinkR className="p" to="/login">
            Already have an account? Log in.
          </LinkR>
        </Form>
      </div>

      <div className="middleContainer" id="isMentor">
        <h1>Are you a mentor or mentee?</h1>

        <div className="mBtnWrapper">
          <Link
            className="mBtn"
            activeClass="active"
            to="mentor"
            spy={true}
            smooth={true}
            onClick={(e) => {
              setIsMentor(true);
            }}
          >
            Mentor
          </Link>

          <Link
            className="mBtn"
            activeClass="active"
            to="mentee"
            spy={true}
            smooth={true}
            onClick={(e) => {
              setIsMentor(false);
            }}
          >
            Mentee
          </Link>
        </div>
      </div>

      <div className="mentorsContainer" id="mentor" hidden={!isMentor}>
        <h1>Mentor Details</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="university">
            <Form.Control
              type="text"
              value={university}
              placeholder="Western University"
              onChange={(e) => setUniversity(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              value={program}
              placeholder="Computer Science"
              onChange={(e) => setProgram(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              value={year}
              placeholder="2021"
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              value={company}
              placeholder="Amazon"
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              value={yoe}
              placeholder="1, 2, 3, ..."
              onChange={(e) => setYoe(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tech Stack</Form.Label>
            <Form.Select
              multiple={true}
              value={techstack}
              onChange={(e) => {
                console.log(e.target.value);
                setTechStack([e.target.value].concat(techstack));
              }}
            >
              {techOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Finish
          </Button>
        </Form>
      </div>

      <div className="menteesContainer" id="mentee" hidden={isMentor}>
        <h1>Mentee Details</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="university">
            <Form.Control
              type="text"
              value={university}
              placeholder="Western University"
              onChange={(e) => setUniversity(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              value={program}
              placeholder="Computer Science"
              onChange={(e) => setProgram(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              value={year}
              placeholder="2021"
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Companies of Interest</Form.Label>
            <Form.Select
              multiple={true}
              value={coi}
              onChange={(e) => {
                console.log(e.target.value);
                setCoi([e.target.value].concat(coi));
              }}
            >
              {companies.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Tech Stack</Form.Label>
            <Form.Select
              multiple={true}
              value={techstack}
              onChange={(e) => {
                console.log(e.target.value);
                setTechStack([e.target.value].concat(techstack));
              }}
            >
              {techOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Finish
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
