import * as projects from '../assets'
function Project({ project }) {
    const { name, repo, link, description, image } = project;
  
    return (
      <div className="p-3">
        <img
          src={projects[image]}
          alt={name}
          className="p-img"
        />
        <div className="">
          <h1>
            <a href={link}>{name}</a>{' '}
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </h1>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Project;