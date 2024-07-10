import React, { useContext, useEffect } from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";

import './App.css';


// <------- Components -------> 
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { AuthContext, FirebaseContext } from './Store/Context';
import { auth } from './Firebase/config';

function App() {

// <------- User Authentication ------->
  const {setUser} = useContext(AuthContext)
  useEffect(() => {
    // Execution while mount (loading)
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}>
          </Route>
          <Route path="/signup" Component={Signup}>
          </Route>
          <Route path="/login" Component={Login}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
