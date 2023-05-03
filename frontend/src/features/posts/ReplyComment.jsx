import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleReply from "./SingleReply";
import { addReply, getCommentReply, replyComment } from "./TestSlice";
import axios from "axios";

const ReplyComment = (props) => {
    
  const reply= useSelector(state=>state.test.posts);
  const {id,post_id, user_id}= props.replyComment;

  

  const [content,setContent]= useState();
 
  

  const dispatch = useDispatch();

  

  const replySubmit = (e) => {
    e.preventDefault();
  
    dispatch(replyComment({content, post_id, id}))
    setContent("");

  };



 
  


  return (
    <div className="reply-comment">
      <div className="comment-reply-body">
        <div>
          <div className="comment">
            <form
              className="comment-form"
              onSubmit={(e) => replySubmit(e)}
            >
              <input
                type="text"
                placeholder="Reply a comment...."
                className="comment-input"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
              />
              <button className="comment-submit" type="submit">
                <i className="fa fa-solid fa-paper-plane"></i>
              </button>
            </form>
      

           {reply &&  reply.map((item) => {
            if(item.id==post_id){
              return (
                <div>


                  {item.comments && item.comments.map((item1)=>{
                       if(item1.id==id){
                        return(
                          <>
                           {item1.commentreplies && item1.commentreplies.map((it)=>{
                             return(
                              <>
                   
                               <SingleReply singleComment={it}/>
                              </>
                             )
                           })}
                          </>
                        )
                       }
                  })}


                </div>
              );
            }})} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
