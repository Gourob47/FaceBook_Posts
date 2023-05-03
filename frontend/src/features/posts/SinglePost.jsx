import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Comments from "./Comments";
import PostEditModal from "./PostEditModal";

import {
  reactCountIncrementAction,
  reactCountDeccrementAction,
} from "./PostSlice";
import { delPostLike, fetchPostsSuccess, getDelLike, getPostComment, getPostLike, getPostUnlike, getUserDetails, getUserPost, likeUserPost, unLikeUserPost } from "./TestSlice";
import axios from "axios";
import { message } from "antd";

const SinglePost = (props) => {
 

  const [loading,setLoading]= useState(false);
  


  
const like = useSelector((state) => state.test.posts);
const user=useSelector(state=>state.test.login);
const loginuser= user.id;

  const { content, user_id, id } = props.post;


 
  const dispatch = useDispatch();


    async function likeSubmit(e) {
    e.preventDefault();
    dispatch(likeUserPost({ user_id, id})); 

  
  }


  async function unLikeSubmit(e) {

    e.preventDefault();
    dispatch(unLikeUserPost({ user_id, id }));
    dispatch(getPostLike({loginuser,id})); 

  }




  return (
    <div>
   
      <div className="single_post">
        <div className="single-post-top">
          <p>{content}</p>

          <PostEditModal post={props.post} />
        </div>
        <div className="react-view">
       

          <div className="post-bottom">
        

                 {like &&
                like.map((item) => {
                  if (item.id == id) {
                  
                  if (item.likes && item.likes.user_id==loginuser) 
                  {

                   
                    return <><button className="react-btn" type="submit" onClick={unLikeSubmit}>
                    <span className="icon-btn">
                      <i className="fa fa-regular fa-thumbs-up"></i>
                    </span>
      
                  UnLike {item.meta && item.meta.likes_count>0?item.meta.likes_count:""} 
                  </button>  </>;
                  } else {
                    return <>
                      <button className="react-btn" type="submit" onClick={likeSubmit} >
                    <span className="icon-btn">
                      <i className="fa fa-regular fa-thumbs-up"></i>
                    </span>
      
                   Like  {item.meta && item.meta.likes_count>0?item.meta.likes_count:""} 
                  </button> 
                    </>;
                  }
                 }
               })}        

{/* 
               {like && like.map((item)=>{
                  if(item.id==id){
                    return(
                      <>
                           {item.meta.likes_count}
                      </>
                    )
                  }
               })}

              

                    <>
                    <button className="react-btn" type="submit" onClick={likeSubmit} >
                    <span className="icon-btn">
                      <i className="fa fa-regular fa-thumbs-up"></i>
                    </span>
                         Like   
                    </button> 
                    </>

           */}

          
      
            
              

            <button className="react-btn">
              <span className="icon-btn">
                <i className="fa fa-regular fa-message"></i>
              </span>
              Comment
            </button>
          </div>

        
          <Comments comment={props.post} />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
