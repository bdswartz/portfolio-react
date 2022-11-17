import React,{useState, useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AboutAccordian() {
    const [twoColumns,setTwoColumns] = useState(window.innerWidth < 750);
    const [expanded, setExpanded] = React.useState('myStory');
      const accordianStyle = {
          color:'rgb(9, 13, 62)',
          backgroundColor:'transparent',
          boxShadow:'none'
          };

      const titleStyle = {
          color:'rgb(9, 13, 62)',
          fontSize: '1.5rem',
          textShadow: '0 0 10px rgb(255 255 255)',
          fontWeight: 'bold',
          width: '33%', 
          flexShrink: 0
          };
      const bodyStyle = {
          fontSize: '1.2rem',
          textShadow: 'none',
          };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    window.addEventListener("resize", () => {
        const newSize = window.innerWidth < 750;
        if (newSize !== twoColumns) setTwoColumns(newSize);
    }, false);
  }, [twoColumns]);

  return (
    <div>
      <Accordion sx={accordianStyle} 
          expanded={expanded === 'myStory'} onChange={handleChange('myStory')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"  
        >
          <Typography sx={titleStyle}>
          My Story...
          </Typography> 
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={bodyStyle}>
          Full-Stack Web Developer with a Certificate in Full Stack Web Development 
          from the University of North Carolina - Chapel Hill.  Currently using 
          technologies such as HTML/CSS, JavaScript, Node.JS, Express.js, MySQL, 
          MongoDB, GraphQL, and React to continuously improve upon previous projects 
          and to conceive and develop new ones.  With my previous education and work 
          experience I have become skilled at managing engineering projects, 
          troubleshooting processes, and analyzing technical data. My goal is to 
          continue growing my skill with web technologies and leverage the professional 
          skills that I have developed managing projects and engineering real world 
          solutions to complex problems.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordianStyle} expanded={expanded === 'mySkills'} onChange={handleChange('mySkills')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={titleStyle}>
          My Tech Skills...
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <h5 className="tech-title">Back-End Stack</h5>
                      <ul className={`${twoColumns ? "tech-list-group2" : "tech-list-group3"}`}>
                        <li>JavaScript/ES6</li>
                        <li>Apex</li>
                        <li>Node.JS</li>
                        <li>Express.JS</li>
                        <li>Express-Sessions</li>
                        <li>Ruby on Rails</li>
                        <li>REST APIs</li>
                        <li>GraphQL APIs</li>
                        <li>mySQL</li>  
                        <li>MongoDB (NoSQL)</li>
                        <li>Sequelize ORM</li>
                        <li>Mongoose ODM</li>
                        <li>Handlebars</li>
                      </ul>
                      <div className="divider"></div>
                      <h5 className="tech-title">Front-End Stack</h5>
                      <ul className={`${twoColumns ? "tech-list-group2" : "tech-list-group3"}`}>
                        <li>JavaScript/ES6</li>
                        <li>React</li>
                        <li>Material UI</li>
                        <li>Lightning Web Components framework</li>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>DOM Document API</li>
                        <li>GraphQL - Apollo Client</li>
                        <li>moment.js</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                      </ul>
                      <div className="divider"></div>
                      <h5 className="tech-title">Other Skills and Technologies</h5>
                      <ul className="tech-list-group3">
                        <li>Git Version Control</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                        <li>AWS (EC2 and S3)</li>
                        <li>NPM</li>
                        <li>Object-Oriented Programming</li>
                        <li>MVC Architecture</li>
                        <li>JWT Authentication</li>
                        <li>State Management</li>
                      </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordianStyle} expanded={expanded === 'myExperience'} onChange={handleChange('myExperience')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={titleStyle}>My Experience...</Typography>
        
        </AccordionSummary>
        <AccordionDetails>
            <ul className="tech-list-group2">
                <li>Project Management</li>
                <li>Engineering Management</li>
                <li>Process Engineering</li>
                <li>Capital Management</li>
                <li>Cause Analysis</li>
                <li>Employee Training</li>
                <li>Talent Development</li>
            </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
