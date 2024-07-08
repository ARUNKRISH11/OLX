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
          <Route exact path="/" Component={Home}>
          </Route>
          <Route path="/signup" Component={Signup}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
