import data from "../../projects.json";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import FooterAndContact from "../Footer/footerWContact";


const Gallery = () => {
  return (
    <div>
      <div className="row">
        {data.map((project) => {
          return (
            <Project
              image={project.image}
              name={project.name}
              description={project.description}
              githubRepo={project.githubRepo}
              deployed={project.deployed}
              key={project.id}
              className="col-4"
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
      </div>
      <FooterAndContact></FooterAndContact>
    </div>
  );
};

export default Gallery;
