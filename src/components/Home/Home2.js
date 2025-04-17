import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about crafting impactful software solutions and continuously sharpening my skills in both frontend and backend development.
              <br />
              <br />I'm fluent in
              <i>
                <b className="purple"> Java and JavaScript</b>
              </i>
              , and I specialize in building
              <i>
                <b className="purple"> full-stack mobile and web applications {" "}</b>
              </i>
              using technologies like Flutter, Node.js, and React.js.
              <br />
              <br />
              My areas of interest include developing scalable products, working with
              <b className="purple"> modern web technologies</b>, and building
              <b className="purple"> Android applications</b> using Flutter.
              <br />
              <br />
              I have hands-on experience with
              <b className="purple"> Express.js, MongoDB, SQL, REST APIs</b>, and version control with Git & GitHub.
              <br />
              <br />
              I love solving DSA problems and have solved over 400+ problems across
              <b className="purple"> LeetCode and GeeksforGeeks</b>. I'm also a proud co-leader at the
              <b className="purple"> Google Developer Student Club (GDSC), SKNCOE</b>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SumitSatre"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/sumitsatre"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sumitsatre/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/satre_sumit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
