import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LetsTalk from './components/LetsTalk';
// import About from './pages/About';
// import Services from './pages/Services';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import './styles/App.css';
import './styles/LetsTalk.css';


function App() {
  // Add state to manage the modal
  const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false);

  const openLetsTalk = () => setIsLetsTalkOpen(true);
  const closeLetsTalk = () => setIsLetsTalkOpen(false);

  return (
    <Router>
      <div className="App">
        {/* Pass the function to open the modal to the Header */}
        <Header onLetsTalkOpen={openLetsTalk} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} /> */}
            {/* The old /contact route is no longer needed */}
          </Routes>
        </main>
        
        <Footer />
        
        {/* Render the modal outside of main */}
        <LetsTalk isOpen={isLetsTalkOpen} onClose={closeLetsTalk} />
      </div>
    </Router>
  );
}

export default App;


