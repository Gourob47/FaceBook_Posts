import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostEditModal_3 from './PostEditModel_3';
import ReplyComment from './ReplyComment';
import { delCommentReplyLike, getCommentReplyLike, likeCommentReply, likePost2 } from './TestSlice';
import axios from 'axios';

const SingleReply = (props) => {

  const [loading,setLoading]=useState(false);
   const {content, id, user_id, post_id, comment_id}=props.singleComment;


   

   const reply= useSelector(state=>state.test.posts)
   const user=useSelector(state=>state.test.login);
   const loginuser=user.id;
 

  const dispatch=useDispatch();

  const likeSubmit=(e)=>{
    e.preventDefault();
    dispatch(likeCommentReply({id,user_id,post_id, comment_id}));
 
  }

  const unLikeSubmit=(e)=>{
    e.preventDefault();
    dispatch(delCommentReplyLike({id,user_id}));
    dispatch(getCommentReplyLike({id, post_id, comment_id, loginuser}));

 
    
  }




  

    
  return (
   <div className='single-comment'>
    <span className='profile '>

       </span>
       <div className="comment-body">
           <p className='single-post-top'>
            {content}
           
           {/*<span className='comment-react-like'><i className='fa fa-light fa-thumbs-up'></i></span>*/}
           <PostEditModal_3  reply={props.singleComment}/> 
           </p>
          
           {/* {commentLike &&
              commentLike.map((item) => {
                if (item.id == id) {
                  if (item.creply &&  item.creply.map((l) => l.user_id).includes(user.id)) {
                    return <><button className="react-btn" type="submit" onClick={unLikeSubmit}>
                    <span className="icon-btn">
                      <i className="fa fa-regular fa-thumbs-up"></i>
                    </span>
                    {loading?"...loading":"Unlike"}  {item.creply.length && item.creply.length>0?item.creply.length:""}
                    
                  </button>  </>;
                  } else {
                    return <>
                      <button className="react-btn" type="submit" onClick={likeSubmit} >
                    <span className="icon-btn">
                      <i className="fa fa-regular fa-thumbs-up"></i>
                    </span>
      
                    {loading?"...loading":"Like"}  {item.creply.length && item.creply.length>0?item.creply.length:""}
                  </button> 
                    </>;
                  }
                }
              })}  */}

                {reply && reply.map((item)=>{
                if(item.id==post_id){
                  return(
                    <>
                      {item.comments && item.comments.map((item1)=>{
                         if(item1.id==comment_id){
                           return(
                             <>
                             {item1.commentreplies && item1.commentreplies.map((it)=>{
                                if(it.id==id){
                                  if (it.creply &&  it.creply.user_id==loginuser) {
                                    return <><button className="react-btn" type="submit" onClick={unLikeSubmit}>
                                    <span className="icon-btn">
                                      <i className="fa fa-regular fa-thumbs-up"></i>
                                    </span>
                                    {loading?"...loading":"Unlike"}  {it.meta.creply_count && it.meta.creply_count>0?it.meta.creply_count:""} 
                                   
                                    
                                  </button>  </>;
                                  }
                                  else {
                                    return <>
                                      <button className="react-btn" type="submit" onClick={likeSubmit} >
                                    <span className="icon-btn">
                                      <i className="fa fa-regular fa-thumbs-up"></i>
                                    </span>
                      
                                    {loading?"...loading":"Like"}  {it.meta.creply_count && it.meta.creply_count>0?it.meta.creply_count:""} 
                                     {/* {it.creply.length && it.creply.length>0?it.creply.length:""} */}
                                  </button> 
                                    </>;
                                  } 
                                }
                             })}
                             </>
                           )
                         }
                      })}
                    </>
                  )
                }
              })}   
            
           
           
     
           

       </div>
  </div>
  )
}

export default SingleReply
