import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function ProjectCard(props) {
  const navigateTo = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link onClick={() => navigateTo(`/Project`)}>
          Click me to see this project
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
