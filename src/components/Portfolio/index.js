import React from 'react';
import ProjectCard from '../ProjectCard';
import { Box } from '@mui/system';

function Portfolio() {
  return (
    <section className="dark-to-light-section">
       <h4 className="portfolio-title">My Work</h4>
        <div className="container">
              <ProjectCard></ProjectCard>
        </div>
    </section>
  );
}
export default Portfolio;
