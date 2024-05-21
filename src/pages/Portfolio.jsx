import Project from '../components/Projects'
export default function Portfolio() {
  const projects = [{
    name: 'surfReport',
    description: 'MERN Stack',
    link: "https://github.com",
    repo: "https://github.com",
    image: "Photo"
  },
  {
    name: 'pastelPuzzels',
    description: 'MERN Stack',
    link: "https://github.com",
    repo: "https://github.com",
    image: "Photo"
  },
  {
    name: 'runBuddy',
    description: 'HTML/CSS',
    link: "https://github.com",
    repo: "https://github.com",
    image: "Photo"
  },
  {
    name: 'ledWall',
    description: 'Node/IoT',
    link: "https://github.com",
    repo: "https://github.com",
    image: "Photo"
  },
  {
    //This is the name of the project
    name: 'calculator',
    //This line describes the stack/the tech we use
    description: 'React/JavaScript/CSS',
    link: "https://github.com",
    repo: "https://github.com",
    image: "Photo"
  },]
  return (
    <div>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}
