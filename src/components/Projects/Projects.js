import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <ProjectCard
            isPage={true}
            title="Industry4.az Platform"
            description="A backend system developed as part of the Industry4.az platform, implementing secure authentication, session management, caching, and robust data operations using modern Java technologies."
            url="https://industry4.az/"
          />
          <ProjectCard
            isPage={true}
            title="BEU ICT Website"
            description="A web platform developed for the BEU ICT Lab, involving both backend functionality and client-side interface development. Implemented dynamic content, secure data handling, and responsive UI components."
            url="https://ict.beu.edu.az/"
          />
          <ProjectCard
            isPage={false}
            title="Div Academy Final Project"
            description="A complete backend system built during the Div Academy final phase, involving layered architecture, CRUD operations, and RESTful services."
            ghLink="https://github.com/MehdiEsedov1/Div-Academy-Final-Project"
          />
          <ProjectCard
            isPage={false}
            title="Spring Security Demo"
            description="Demonstrates secure user authentication and role-based authorization using Spring Security in a typical Java backend application."
            ghLink="https://github.com/MehdiEsedov1/Spring-Security"
          />
          <ProjectCard
            isPage={false}
            title="Media Extractor"
            description="A utility tool that extracts and organizes metadata from image and video files using Java."
            ghLink="https://github.com/MehdiEsedov1/Media-Extractor"
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
