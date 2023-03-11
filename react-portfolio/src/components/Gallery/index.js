import data from '../../projects.json'
import ProjectCard from './ProjectCard'

const Gallery = () => {

    return (
        <div>
          {data.map((project) => {
            return (
             <ProjectCard
             image = {project.image}
             name = {project.name}
             description = {project.description}
             githubRepo = {project.githubRepo}
             deployed = {project.deployed}
             key = {project.id}
             />
            );
          })}
        </div>
    )
}

export default Gallery