import React from 'react';
import ProjectCard from '../ProjectCard';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
//   const { currentCategory } = props;
  return (
    <section className="dark-to-light-section">
        <div className="container">
            <div className="row portfolio-flex">
              <ProjectCard></ProjectCard>
            </div>
        </div>
    </section>
  );
}
export default Portfolio;
