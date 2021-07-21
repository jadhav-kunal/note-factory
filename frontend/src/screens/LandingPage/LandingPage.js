import React from "react";

import "./LandingPage.css";
import { Button, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Factory</h1>
              <p className="subtitle">One Safe Place For All Your Notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/Register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="btn btn-outline-light"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
