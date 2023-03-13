import data from "../../projects.json";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import FooterAndContact from "../Footer/footerWContact";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';

const Gallery = () => {
  return (
    <div className="pt-3">
      <h1 className="center" style={{textDecoration:"underline", fontWeight:"bold"}}>PROJECTS</h1>
      <Container>
        <Row >
          {data.map((project) => {
            return (
              <Project
                image={project.image}
                name={project.name}
                description={project.description}
                githubRepo={project.githubRepo}
                deployed={project.deployed}
                key={project.id}
                modal={
                  <ProjectModal
                    image={project.image}
                    name={project.name}
                    description={project.description}
                    githubRepo={project.githubRepo}
                    deployed={project.deployed}
                    detailedDescription={project.detailedDescription}
                    key={project.id}
                  />
                }
              />
            );
          })}
        </Row>
      </Container>

      <FooterAndContact></FooterAndContact>
    </div>
  );
};

export default Gallery;
