import React from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";

import './App.css';


// =====Import Components=====
 
import Home from './Pages/Home';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} >
          </Route>
          <Route path="/signup" element={<Signup/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
