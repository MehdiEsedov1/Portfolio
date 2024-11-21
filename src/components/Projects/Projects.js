import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
import Project0 from "../../Assets/Projects/Project0.png";
import todolist from "../../Assets/Projects/to-do-list.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project0}
              isBlog={false}
              title="E-commerce"
              description="An E-commerce application built with React, Redux, and Tailwind CSS. It features a modern UI, state management, and responsive design. The project provides a smooth user experience for browsing and purchasing products."
              ghLink="https://github.com/MehdiEsedov1/E-commerce-mix"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-do-list"
              description="This is my first project where I extensively used JavaScript to interact with the DOM. The project is a simple and functional to-do list application that allows users to add, remove, and search tasks. The application is built using HTML, CSS, and JavaScript."
              ghLink="https://github.com/MehdiEsedov1/To-Do-List-Vanilla-JS"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-tac-toe"
              description="This is a Tic-tac-toe application built using HTML, CSS, JavaScript, and DOM manipulation. In this project, two players can play the game offline on the same computer. The application also includes a feature to start a new game, and the players' scores are saved using localStorage for persistent score tracking."
              ghLink="https://github.com/MehdiEsedov1/Tic-Tac-Toe"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
