import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumit Vitthal Satre</span> from{" "}
            <span className="purple">Pune, India.</span>
            <br />
            I’m currently pursuing a Bachelor of Engineering in Information Technology at{" "}
            <b className="purple">SKNCOE</b> and have a CGPA of 8.50.
            <br />
            I’ve gained hands-on experience as a Full Stack Flutter Developer at{" "}
            <b className="purple">Kartavya Technology</b>, and previously interned at{" "}
            <b className="purple">Kutumb Aspiration</b> and <b className="purple">Kirabiz Technologies</b>.
            <br />
            <br />
            I enjoy working across the stack with technologies like{" "}
            <b className="purple">Flutter, Node.js, Express.js, React.js, and MongoDB</b>.
            I’m also actively sharpening my problem-solving skills with over{" "}
            <b className="purple">400+ DSA problems</b> solved on platforms like LeetCode and GeeksforGeeks.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Mobile & Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving DSA Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech & Tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with passion."{" "}
          </p>
          <footer className="blockquote-footer">Sumit Satre</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
