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
            isPage={false}
            title="Div-Academy-Final-Project"
            description="This project was developed in a team as part of Div Academy, using Spring, PostgreSQL, Docker, and more. It showcases the integration of backend technologies to build a robust and scalable application."
            ghLink="https://github.com/MehdiEsedov1/Div-Academy-Final-Project"
          />
          <ProjectCard
            isPage={false}
            title="Spring-Security"
            description="This project demonstrates authentication and authorization using Spring Security. It includes user login functionality with username and password verification, and generates a JSON Web Token (JWT) upon successful authentication. The main goal of this project is to explore and understand the core features and configuration of Spring Security."
            ghLink="https://github.com/MehdiEsedov1/Spring-Security"
          />
          <ProjectCard
            isPage={false}
            title="MediaExtractor"
            description="This is a Linux-based media extraction tool developed in Java and Spring Boot. It allows downloading and converting media from URLs to MP4 or MP3 formats using yt-dlp and ffmpeg, providing a lightweight and efficient back-end solution for audio/video processing."
            ghLink="https://github.com/MehdiEsedov1/MediaExtractor"
          />
            <ProjectCard
            isPage={true}
            title="Donello-az (In development)"
            description="This is one of my projects that is in production, focusing on back-end development for an E-commerce application. The project is built using Java SE, Spring, and PostgreSQL, providing a robust back-end solution for handling e-commerce transactions and data management."
            url="https://donello-az.com"
          />
            <ProjectCard
            isPage={true}
            title="ICT Lab"
            description="This is one of my projects currently in production, designed as a secure certificate verification system. The platform enables users to validate academic and professional certificates online. The back-end is developed using Java SE, Spring Boot, and PostgreSQL, ensuring robust data management, secure access, and reliable verification processes."
            url="https://ict.beu.edu.az/"
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
