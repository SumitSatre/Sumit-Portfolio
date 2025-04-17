import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import issuecop from "../../Assets/Projects/issuecop-dashboard-pic.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ekalakaar from "../../Assets/Projects/ekalakaar-dashboard-pic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={issuecop}
              isBlog={false}
              title="Issuecop Application"
              description="Developed and led the initial phase of IssueCop, an app for managing company issues efficiently. Worked extensively on both frontend (Flutter) and backend (Node.js, MongoDB). Led the development for a certain period, ensuring smooth functionality and scalability."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://play.google.com/store/apps/details?id=com.issuecop.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ekalakaar}
              isBlog={false}
              title="eKalakaar Application"
              description="During my Flutter Development internship at Kutumb Aspiration, I contributed to the Ekalakaar application by integrating RESTful APIs for seamless data communication, implementing efficient state management for a responsive user experience, and designing scalable data models. I collaborated closely with a diverse team and maintained smooth workflows using Git and GitHub for version control."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/apps/details?id=com.tanxe.android.ekalakaar_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              isGithub={true}
              title="Food Delivery Website"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/SumitSatre/HungryHub"
              demoLink="https://github.com/SumitSatre/HungryHub"              
            />
          </Col>
{/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
