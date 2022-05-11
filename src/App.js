import React, { useState } from 'react';
import AboutMe from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {

  const [currentPage, setCurrentPage] = useState('aboutme');
  return (
    <div>
      <Header
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      ></Header>
    <main>
      {/* {currentPage === 'landing' && <Landing></Landing>} */}
      {currentPage === 'aboutme' && <AboutMe></AboutMe>}
      {currentPage === 'portfolio' && <Portfolio></Portfolio>}
      {currentPage === 'contact' && <Contact></Contact>}
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;
