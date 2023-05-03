import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Popover } from 'antd';
import { openEditModal, reactCount } from './PostSlice';
import SinglePost from './SinglePost';
import { getPostComment, getPostLike, getUser, getUserDetails, getUserPost } from './TestSlice';
import axios from 'axios';


const PostView = () => {
 
  const posts = useSelector((state) => state.test.posts);
  const[loading,setLoading]=useState(false);



const dispatch= useDispatch();




  return (
    <div className='post-view'>
    
   
   
      {loading?"...loading":
      <>
      {posts && posts.map((item,index)=>{
         
         return (
               <div>
                  <SinglePost post={item}/>
               </div>

          )
      })
    }
      </>
      }
      
    </div>
  )
}

export default PostView
