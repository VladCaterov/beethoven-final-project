import logo from './logo.svg';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </Router>  
  );
}

export default App;
