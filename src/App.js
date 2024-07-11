import React, { useContext, useEffect } from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";

import './App.css';


// <------- Components -------> 
import { AuthContext, FirebaseContext } from './Store/Context';
import { auth } from './Firebase/config';
import Home from './Pages/Home';
import CreatePage from './Pages/Create';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';

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
          <Route exact path="/" Component={Home}/>
          <Route path="/signup" Component={SignupPage}/>
          <Route path="/login" Component={LoginPage}/>
          <Route path="/sell" Component={CreatePage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
