import React from 'react';
import www from '../../assets/images/world-wide-web-white.png';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Landing() {
//   const { currentCategory } = props;
  return (
<div class="backsplash-section1">
    <a href="#sticky-header">
        <div className="hero-title">
            <img className="landing-icon" src={www} alt="World Wide Web Icon"/>
            <h4>Brian Swartz</h4>
            <h5>Aspiring Full Stack Web Developer</h5>
        </div>
    </a>
</div>
  );
}
export default Landing;