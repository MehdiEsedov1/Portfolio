import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={!props.isPage ? props.ghLink : props.url} target="_blank">
            {!props.isPage ? (
              <>
                <BsGithub />{"\u00A0"}GitHub
              </>
            ) : (
              <>
                <CgWebsite />{"\u00A0"}Page
              </>
            )}
          </Button>
          {"\n"}
          {"\n"}
        </Card.Body>
      </div>
    </Card>
  );
}

export default ProjectCards;
