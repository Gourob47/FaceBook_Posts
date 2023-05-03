import logo from "./logo.svg";
import "./App.css";
import Home from "./layouts/Home";
import { Container } from "react-bootstrap-v5";
import { useEffect, useState } from "react";
import { Link, RouterProvider, useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import Auth from "./layouts/Auth";
import  route from "./layouts/router/Router"
import { getCommentReply, getPostComment, getPostLike, getUserDetails, getUserPost } from "./features/posts/TestSlice";
import axios from "axios";
import { useDispatch } from "react-redux";



function App() {

  const dispatch= useDispatch();

  async function get(){
  
    axios.get("http://localhost:3333/login/getUser",{
      withCredentials:true,
    }).then(function(response){
      dispatch(getUserDetails(response.data));
  
    })
  
  
    
  } 
    const getPost = async () =>{
    try {
     
     axios.get('http://localhost:3333/getPost',{withCredentials:true}).then(function(response){
      console.log(response.data);
       dispatch(getUserPost(response.data));
   
     })
    } catch (error) {
     
    }
 
  }
  



  // async function getComment(){
  //   try {
     
  //     await axios.get("http://localhost:3333/post/comment").then(function(response){
  //     dispatch(getPostComment(response.data));
        
  //   });
    
      
  //    } catch (error) {
      
  //    }
   
 
  // }
 

  // async function commentReply(){
  //   await axios.get("http://localhost:3333/commentreply").then(function(response){dispatch (getCommentReply(response.data))});
   
  //   }

     
 
  
  useEffect(() => {
  get();
  getPost();
  }, []) 

  
  
   
   return(
    <div>  
      <RouterProvider router={route}/>
    </div>
   )
}

export default App;
