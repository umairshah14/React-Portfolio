import data from "../../projects.json";
import Project from "./Project";
import ProjectModal from "./ProjectModal";

const Gallery = () => {
  return (
    <div>
      {data.map((project) => {
        return (
          <>
            <Project
              image={project.image}
              name={project.name}
              description={project.description}
              githubRepo={project.githubRepo}
              deployed={project.deployed}
              key={project.id}
              modal = {<ProjectModal
                image={project.image}
                name={project.name}
                description={project.description}
                githubRepo={project.githubRepo}
                deployed={project.deployed}
                detailedDescription = {project.detailedDescription}
                key={project.id}/>}
            />
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
