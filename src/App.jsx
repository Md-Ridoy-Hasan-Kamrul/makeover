import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
