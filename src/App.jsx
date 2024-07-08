import React from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
              <App />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
