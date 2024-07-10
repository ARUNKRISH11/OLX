import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { auth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Store/Context';

function Login() {
  // <------- Hooks and Variables ------->
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    // <------- Firebase ------->
  // Firestore Database in native mode
  // Allow read and write option
  const {Firebase} = useContext(FirebaseContext)

  // <------- Functions ------->
  const handleLogin =(e)=>{
    // To avoid default reloading
    e.preventDefault()
    // Should check authentication ON in firebase site
    auth.signInWithEmailAndPassword(email, password).then((result)=>{
      alert('Login Successful')
      console.log(result);
    }).catch((error)=>{
      alert('Check Email and Password')
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"

            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"

            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={() => navigate('/')}>Login</button>
        </form>
        <a onClick={() => navigate('/signup')} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
