import github from '../../assets/images/github-white-on-transparent.png'


function ProjectCard() {
  const projects = [
      {
        name: `Gardener's Forum`,
        description:
          'A MERN Full-Stack web application that allows gardeners to build and maintain their virtual garden.',
        role: 'Back-End Server, GraphQL API Endpoints, React Front End',
        tools: ['MongoDB','Express.js','React','Node.js','Material UI','GraphQL','Mongoose ODM','API Endpoints','JSON Web Tokens'],
        image: 'gardenerforum-ss.jpg',
        github: 'https://github.com/bdswartz/garden-forum',
        deploy: 'https://gardenforum.herokuapp.com/'
      },
      {
        name: 'Scout Pet Service',
        description:
          'Full Stack express web server application with MVC architecture that utilizes Handlebars html templating package.',
        role: 'Back-End Server, API Endpoints, Data Algorithms',
        tools: ['Node.JS','Express.JS','mySQL','APIs','Sequelize','Handlebars','MVC Architecture'],
        image: 'scout-job-ss.jpg',
        github: 'https://github.com/bdswartz/pet-care-marketplace',
        deploy: 'https://scout-pet-service.herokuapp.com/'
      },
      {
        name: 'Weather Dashboard',
        description:
          'Built for mobile, this application utilizes a third party weather API and persistent city data to provide a weather snapshot.',
        role: 'Sole Contributor',
        tools: ['Web API','Navigator Geolocation API','DOM Document API','JavaScript','HTML','CSS'],
        image: 'weather-ss.jpg',
        github: 'https://github.com/bdswartz/weather-dashboard',
        deploy: 'https://bdswartz.github.io/weather-dashboard/'
      },
      {
        name: 'Tech Blog',
        description:
          'A Full-Stack CMS-style blog posting app with an express server and a mySQL database.',
        role: 'Sole Contributor',
        tools: ['Node.JS','Express.JS','mySQL','Server-Side APIs','Sequelize','Handlebars','MVC Architecture'],
        image: 'tech-blog-ss.jpg',
        github: 'https://github.com/bdswartz/tech-blog',
        deploy: 'https://hidden-lake-84375.herokuapp.com/'
      },
      {
        name: 'Event Weather Outlook',
        description:
          'Built with Javascript, this application accesses the Ticketmaster and Open Weather third party APIs to present events to a user.',
        role: 'API interface/DOM manipulation',
        tools: ['Web API','DOM Document API','JavaScript','HTML','CSS'],
        image: 'ticketmaster-logo-azure.svg',
        github: 'https://github.com/bdswartz/event-weather-outlook',
        deploy: 'https://bdswartz.github.io/event-weather-outlook/'
      },
      {
        name: 'JavaScript Quiz',
        description:
          'An application with quiz questions and answers driven by JavaScript that are in random order to keep the user engaged.',
        role: 'Sole Contributor',
        tools: ['Web API','DOM Document API','JavaScript','HTML','CSS'],
        image: 'coding-quiz-ss.jpg',
        github: 'https://github.com/bdswartz/pet-care-marketplace',
        deploy: 'https://scout-pet-service.herokuapp.com/'
      }
    ];

    return (
      <div className="row portfolio-flex">
      {projects.map((project) => (
    <div className="card-container col s12 m6 l4" key={project.name}>
    <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img 
          className="activator portfolio-image"
          src={require(`../../assets/images/${project.image}`)}
          alt="Scout Pet Service Screen Shot"/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{project.name}<i className="reveal-icon material-icons right">more_vert</i></span>
          <p>{project.description}</p><br/>
          <p><span className="role-title">Role:</span><span>{project.role}</span></p>
        </div>
        <div className="card-reveal">
          <div className="reveal-flex">
          <div>
          <span className="card-title">{project.name}<i style={{color: 'rgb(9, 13, 62)'}} className="material-icons right">close</i></span>
          <p className="tech">Tools and Techniques</p>
          {project.tools.map((tool) => (<p>{tool}</p>))}
          </div>
          <div className="project-links">
            <a
            href={project.deploy}
            target="_blank" 
            id="demo-button" 
            className="waves-effect waves-light btn">Demo</a>
            <a
            href={project.github}
            target="_blank"
            id="demo-button" 
            className="waves-effect waves-light btn">
                <img
                className="github-link" 
                src={github}
                alt="Goto GitHub Repo"/>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
      ))}
  </div>
  );
}
export default ProjectCard;
