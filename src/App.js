import React, { useState } from 'react';
import AboutMe from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import beachSunrise from './assets/images/beach-sunrise.jpg'


// import Resume from './components/Resume';

function App() {

  const [currentPage, setCurrentPage] = useState({page:'aboutme', background:beachSunrise});
  return (
    <div style={{minHeight:'100vh'}}>
      <Header
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      ></Header>
    <main>
      {/* {currentPage === 'landing' && <Landing></Landing>} */}
      {currentPage.page === 'aboutme' && <AboutMe></AboutMe>}
      {currentPage.page === 'portfolio' && <Portfolio></Portfolio>}
      {currentPage.page === 'contact' && <Contact></Contact>}
      {/* {currentPage === 'resume' && <Resume></Resume>} */}
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;
