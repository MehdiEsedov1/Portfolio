import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Mahdi Asadov </span>
            from <span className="blue"> Baku, Azerbaijan.</span>
            <br />
            I am currently studying Computer Science at Baku Engineering
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching films
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing sports
            </li>
          </ul>
          <p style={{ color: "#4d77ec" }}>
            "Programs must be written for people to read, and only incidentally
            for machines to execute."{" "}
          </p>
          <footer className="blockquote-footer">Harold Abelson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
