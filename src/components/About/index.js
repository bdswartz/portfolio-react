import React from 'react';
import AboutAccordian from '../AboutAccordian';

function AboutMe() {
//   const { currentCategory } = props;
  return (
    <section className="container dark-to-light-section" id="about-me">
    <div className="row">
    <div className="portrait-holder col m12 l5">
        <div className="portrait">
        </div>
        <h4 className="section-title about-me">About Me</h4>
        <p className="bio-body">Living in Charlotte, North Carolina with my wife and three children, and spending leisure time cooking and as a (very) amateur astronomer.</p>
    </div>
   
    <div className="bio-holder col m12 l7">
        <div className="skills"> 
          <AboutAccordian></AboutAccordian>
        </div> 
      </div>
    </div>
</section>
  );
}
export default AboutMe;