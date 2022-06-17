import React, {useState, useEffect} from 'react';
import { Box } from '@mui/system';
import resume from '../../assets/swartz-resume.pdf'


function Resume() {
  const [twoColumns,setTwoColumns] = useState(window.innerWidth < 750);

  useEffect(() => {
    window.addEventListener("resize", () => {
        const newSize = window.innerWidth < 750;
        if (newSize !== twoColumns) setTwoColumns(newSize);
    }, false);
  }, [twoColumns]);

  return (
    <section className="dark-to-light-section">
       <h4 className="portfolio-title">Experience and Skills</h4>
        <div className="container">
          <a href= {resume} target="_blank"><Box component='h3' sx={{ fontStyle: 'italic', fontSize: '1.5rem', mt: '5rem', color: 'rgb(9, 13, 62)' }}>Click Here to Download Full Resume</Box></a>
        </div>
    </section>
  );
}
export default Resume;
