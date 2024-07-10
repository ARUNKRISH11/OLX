import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../Store/FirebaseContext';
import { auth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  
  // <------- Hooks and Variables ------->
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  
  // <------- Firebase ------->
  // Firestore Database in native mode
  // Allow read and write option
  const {Firebase} = useContext(FirebaseContext)

  // <------- Functions ------->
  const handleSubmit =(e)=>{
    // To avoid default reloading
    e.preventDefault()
    // Should check authentication ON in firebase site
    auth.createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName: username}).then(()=>{
        Firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: phone
        }).then(()=>{
          alert('User Added')
          navigate('/login')
        })
      })
      console.log(result.user);
    }).catch((error)=>{
      alert('Password should be at least 6 characters')
    })
  }


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            // Storing value into state variable
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"

            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
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
          <button>Signup</button>
        </form>
        <a onClick={() => navigate('/login')}>Login</a>
      </div>
    </div>
  );
}
