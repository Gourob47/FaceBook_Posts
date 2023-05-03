import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, signUpUser } from '../features/posts/TestSlice';

const Signup = () => {
    const [name,setName]=useState();
    const [email,setEmail]= useState();
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();

    const navigate= useNavigate();
    const dispatch= useDispatch();
    async function signup(){
      let item={name,email,username,password};
   
  //    dispatch(registerUser({name,email, username,password}));


      fetch("http://localhost:3333/signup",{
        method:"POST",
        headers:{
            "Content-type":"application/json; charset=UTF-8",
            Accept: "Application/json",
        },
        body: JSON.stringify(item)
      }).then((response)=> (response.status==200? (alert('Signp Success'),navigate('/login')):alert('SignUp Failed') ) )

      setName("");
      setEmail("");
      setUsername("");
      setPassword("");
    }
    
  return (
    <div className="container">
    <div className="row">
    <div className="input-container">
        <label>Name </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>
      <div className="input-container">
        <label>Email </label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div className="input-container">
        <label>UserName </label>
        <input
          type="text"
          name="userName"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
      </div>
      <div className="input-container">
        <label>Password </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <div className="button-container">
        <button onClick={signup} type="submit" className="btn btn-primary">
          SignUp
        </button>
       

      </div>
    </div>
  </div>
  )
}

export default Signup