import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {   getCommentReply, getPostComment, getUser, getUserDetails, getUserPost, loginUser, userLogin } from "../features/posts/TestSlice";
import axios from "axios";


const Auth = () => {
  

  
  const user= useSelector(state=>state.test.login)
  const post= useSelector((state)=>state.test.posts);
  const comment= useSelector((state)=>state.test.comment);
  const reply= useSelector((state)=>state.test.commentReply);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const dispatch= useDispatch();
 

  const getPost = async () =>{
    axios.get('http://localhost:3333/getPost',{
      withCredentials:true
    }).then(function(response){
      dispatch(getUserPost(response.data));
  })
  
 
  }

  async function login() {
   

 
  
  
  

 
  

  // dispatch(loginUser({email,password}));

  
  

   const userData={
    email,password
  }

 
    const response= await axios.post("http://localhost:3333/login",userData,{
      withCredentials:true
    } );

 
   
   
    
     if(response.data=='Login Failed'){
     alert('login Failed');
     }
    else if(response.status==200)
    {
      
   
      dispatch(getUserDetails(response.data.user));
      getPost();
      navigate('/post')
      
     
    
    }
   
   

      setEmail("");
      setPassword("");

  
   }


   



  
 

  
  return (
    <>
      <div className="container">
        <div className="row">
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
            <button onClick={login} type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/signup" className="btn btn-secondary">signup</Link>

          </div>

  
         
        </div>
      </div>
      
    </>
  );
};

export default Auth;
