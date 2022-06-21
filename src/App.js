import React, { useState } from 'react';
import AboutMe from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';
import beachSunrise from './assets/images/beach-sunrise.jpg'
import Landing from './components/Landing';

function App() {

  const [currentPage, setCurrentPage] = useState({page:'landing', background:beachSunrise});
  if (currentPage.page==='landing') {
    return (
      <>
      <Landing
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
      ></Landing>
      </>
    )
  }
  else {
  return (
    <div style={{minHeight:'100vh'}}>
      <Header
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      ></Header>
    <main>
      
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
}
export default App;
