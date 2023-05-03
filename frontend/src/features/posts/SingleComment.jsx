import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostEditModal from './PostEditModal';
import PostEditModal_2 from './PostEditModel_2';
import ReplyComment from './ReplyComment';
import { getCommentLike, likeComment, likePost1, unLikeComment } from './TestSlice';
import axios from 'axios';

const SingleComment = (props) => {


   const [loading,setLoading]= useState(false);

    const commentLike= useSelector(state=>state.test.posts);
    const user=useSelector(state=>state.test.login);
    const loginuser= user.id;
    const {id,content,user_id, post_id}=props.comment;

    //console.log(props.comment);

    const dispatch=useDispatch();
   


     
    
    const likeSubmit=(e)=>{
        e.preventDefault();
        dispatch(likeComment({user_id, post_id,id}));
    
     
     
    }

    const unLikeSubmit=(e)=>{
      e.preventDefault();
      dispatch(unLikeComment({user_id, post_id,id}));
      dispatch(getCommentLike({id,post_id,loginuser}));

     
  }





 
  return (
   <div className='single-comment'>
    <span className='profile '>

  </span>
       <div className="single-post">
         <p className='single-post-top'>
          {content}
        
          {/* <span className='comment-react-like'><i className='fa fa-light fa-thumbs-up'></i></span> */}
        <PostEditModal_2  SingleComment={props.comment}/> 
           
           </p>

             {commentLike &&
                commentLike.map((item) => {

                  if(item.id==post_id){
                  return(
                    <>
                     {item.comments && item.comments.map((item1)=>{
                                     
                  if (item1.id == id) {
                   
                    if (item1.commentlikes &&   item1.commentlikes.user_id==loginuser) {
                     

                      return <><button className="react-btn" type="submit" onClick={unLikeSubmit}>
                      <span className="icon-btn">
                        <i className="fa fa-regular fa-thumbs-up"></i>
                      </span>
                      UnLike {item1.meta.commentlikes_count && item1.meta.commentlikes_count>0?item1.meta.commentlikes_count:""}
                      
                    </button>  </> ;
                   
                    }
                    else
                    {
                      return(
                        <>
                           <button className="react-btn" type="submit" onClick={likeSubmit} >
                      <span className="icon-btn">
                         <i className="fa fa-regular fa-thumbs-up"></i>
                       </span>
        
                     Like {item1.meta.commentlikes_count && item1.meta.commentlikes_count>0?item1.meta.commentlikes_count:""}
                     </button> 
                        </>
                      )
                    }
                  }


                   })}
                   
                    </>
                  )
                  }
                
        
               }
               
               )}   




        
           <button className='comment-btn'>
             Reply
           </button>


           {commentLike && commentLike.map((item)=>{
            if(item.id==post_id){
                 return(
                  <>
                   {item.comments && item.comments.map((item1)=>{
                     if(item1.id==id){
                      return(
                        <>
                        <ReplyComment replyComment={item1}/>
                        </>
                      )
                     }
                  })}
                  </>
                 )
            }
          
           })}
          
         {/* <ReplyComment  replyComment={props.comment}/>  */}
  <div>
           
  </div>
                   
       </div>
  </div>
  )
}

export default SingleComment
