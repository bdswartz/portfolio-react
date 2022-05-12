import React from 'react';
import ProjectCard from '../ProjectCard';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
  return (
    <section className="dark-to-light-section">
        <div className="container">
              <ProjectCard></ProjectCard>
        </div>
    </section>
  );
}
export default Portfolio;
