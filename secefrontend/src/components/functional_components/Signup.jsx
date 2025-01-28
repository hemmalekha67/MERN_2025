import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Signup=()=>{
  var [firstname, setFirstname] = useState('');
  var [lastname, setLastname] = useState('');
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var navigate= useNavigate();

  const handleSignup=async(event)=>{
    event.preventDefault()
    
    try{
      console.log("Event Trigger");
      const req = await axios.post("http://localhost:3001/signup",{
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    })
   console.log(req);
   alert(req.data)
   navigate('/login');

  }catch(err){
      console.log(err)
  }
}

  return (
    <div>
       <form method = "POST"  onSubmit={handleSignup}>
          <label>Firstname:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          /><br/>
          <label>Lastname:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          /><br/>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br/>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br/>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br/>
          
        <button type="submit">Signup</button>
        </form>
        <p>
          Already have account??<a href="/login">Login</a>
        </p>
    </div>
  );
}

export default Signup;
