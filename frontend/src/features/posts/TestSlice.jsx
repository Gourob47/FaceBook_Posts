import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { useNavigate } from "react-router-dom";


const initialState = {
  posts: [],
 // user:[],
 // postLikes:[],
 // comment:[],
 // commentLikes:[],
 // commentReply:[],
 // commentReplyLikes:[],
  login:[],

};


export const registerUser=createAsyncThunk('signup', async({name,email, username,password})=>{
   const userData={
    name,email, username,password
   };
   

   const response= await axios.post("http://localhost:3333/signup",userData,{
    headers:{
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      withCredentials: true,
    }
   });
   return response.data;
})


export const loginUser=createAsyncThunk('login', async({email,password})=>{
  
  const userData={
    email,password
  }

 
    const response= await axios.post("http://localhost:3333/login",userData,{
      withCredentials: true,
    } );



 
    return response.data;
 
})

export const getUser=createAsyncThunk('login/getUser', async()=>{
  
    const response= await axios.get("http://localhost:3333/login/getUser",{
      withCredentials:true,
    });

    return response.data;
 
})

export const logoutUser= createAsyncThunk('logout', async()=>{
 const userData={

  }
  const response= await axios.post("http://localhost:3333/logout",userData,{
    withCredentials:true
  });

  return response.data;
})


export const userPost=createAsyncThunk('create', async({content})=>{
  
  const userData={
  content
  }
 
    const response= await axios.post("http://localhost:3333/create",userData,{ 
      withCredentials: true,
    } );

    return response.data;
 


})





export const editUserPost= createAsyncThunk('postedit/pe', async({id,user_id,content})=>{
  
  const userData={
    content
  }
  
  const response = await axios.post(`http://localhost:3333/postedit/pe/${id}/${user_id}`,userData,{
    withCredentials: true,
  })

  return response.data;

  

})


export const deleteUserPost= createAsyncThunk('postedit/de', async({user_id,id})=>{
  

  const response = await axios.delete(`http://localhost:3333/postedit/de/${user_id}/${id}`,{
    withCredentials: true,
  })
 
  return response.data;

})



export const likeUserPost=createAsyncThunk('postedit/li', async({user_id, id})=>{
    const userData={
    
    }
  
    const response= await axios.post((`http://localhost:3333/postedit/li/${user_id}/${id}`),userData,{
    
    withCredentials:true
    } );

    console.log(response.data);

    return response.data;
 

})


export const unLikeUserPost= createAsyncThunk('postedit/unli', async({user_id,id})=>{
  
   const response=await axios.delete(`http://localhost:3333/postedit/unli/${user_id}/${id}`,{
   withCredentials: true
  
   })

   return response.data;
 })


 export const postComment= createAsyncThunk('post/comment', async({content,id,user_id})=>{
  const userData={
    content
  }
  const response= await axios.post(`http://localhost:3333/post/comment/${id}/${user_id}`,userData,{
    withCredentials: true
  })


  return response.data;
 })
 

 export const editComment= createAsyncThunk('post/comment/edit', async({content,id,user_id})=>{
  const userData={
    content
  }
  const response= await axios.post(`http://localhost:3333/post/comment/edit/${id}/${user_id}`,userData,{
    withCredentials: true
  })


 
  return response.data;

 })


 export const delComment= createAsyncThunk('post/comment/del', async({id,user_id})=>{
 
  const response= await axios.delete(`http://localhost:3333/post/comment/del/${id}/${user_id}`,{
    withCredentials:true
  })



  return response.data;

 })

 export const likeComment= createAsyncThunk('commentlike', async({user_id, post_id,id})=>{
  const userData={}
 const response= await axios.post(`http://localhost:3333/commentlike/${user_id}/${post_id}/${id}`,userData,{withCredentials:true});
 

  return response.data;
 })


 export const unLikeComment= createAsyncThunk('delcommentlike', async({user_id, post_id,id})=>{

  const response= await axios.delete(`http://localhost:3333/delcommentlike/${user_id}/${post_id}/${id}`,{//withCredentials:true
  
  withCredentials:true
  });
  
  return response.data;
 })


 export const replyComment= createAsyncThunk('reply', async({content,post_id,id})=>{
  const userData={
    content
  }
  const response= await axios.post(`http://localhost:3333/reply/${post_id}/${id}`,userData,{
    withCredentials: true
  })

 
  return response.data;
 })


 export const editReplyComment= createAsyncThunk('repledit',async({content,id,user_id})=>{
  const userData={
    content
  }
  const response= await axios.post(`http://localhost:3333/replyedit/${id}/${user_id}`,userData,{
    withCredentials: true
  })

 
  
  return response.data;
 })

 export const delCommentReply= createAsyncThunk('replydelete', async({id,user_id})=>{
  const response= await axios.delete(`http://localhost:3333/replydelete/${id}/${user_id}`,{
    withCredentials: true
  })
 
  return response.data;
 })

 export const likeCommentReply= createAsyncThunk('replylike', async({id,user_id,post_id, comment_id})=>{
 const userData={

  }
  const response= await axios.post(`http://localhost:3333/replylike/${id}/${user_id}/${post_id}/${comment_id}`,userData,{
    withCredentials:true
  })
  
  return response.data;
 })

 export const delCommentReplyLike= createAsyncThunk('delreplylike',async({id,user_id})=>{
  const response= await axios.delete(`http://localhost:3333/delreplylike/${id}/${user_id}`,{
    withCredentials: true
  })
 
  return response.data;
 })



const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
      getUserPost:(state,action)=>{
      
       state.posts=action.payload;
      
      },
   
      getUserDetails:(state,action)=>{
      
       state.login=action.payload;
      },
      getPostLike:(state,action)=>{
        const {payload}=action;

        const post=state.posts.find((item)=>item.id==payload.id);
       
     
        if(post)
        {
          if(post.likes.user_id==payload.loginuser){
            post.likes='';
            post.meta.likes_count-=1;
          }
          
          //post.likes= post.likes.filter((item)=>item.user_id!==payload.loginuser);
        }
  
       
      },
     
      getPostComment:(state,action)=>{
        state.comment=action.payload;
       
      },
      getCommentLike:(state,action)=>{
        const {payload}= action;
    
  

      const post= state.posts.filter((item)=>item.id==payload.post_id)
  
      if(post){
        const comment= post[0].comments.filter((item1)=>item1.id==payload.id)
       
       

        if(comment){
          if(comment[0].commentlikes.user_id==payload.loginuser)
           {comment[0].commentlikes='';
           comment[0].meta.commentlikes_count-=1;}
       }

       
     }
       
      },
      getCommentReply:(state,action)=>{
        state.commentReply=action.payload;
      },

      getCommentReplyLike:(state,action)=>{
        const {payload}= action;
 

       
        const post= state.posts.filter((item)=>item.id==payload.post_id)
  
        if(post){
          const comment= post[0].comments.filter((item1)=>item1.id==payload.comment_id)
          
          
   
          if(comment){
            const reply= comment[0].commentreplies.filter((it)=>it.id==payload.id)
  
            if(reply){
              if(reply[0].creply.user_id==payload.loginuser)
              {reply[0].creply='';
              reply[0].meta.creply_count-=1;}
            }
          }
   
          
        }
    
       
  
      }
      
      
    
     
  },

  
  extraReducers(builder){
    builder.addCase(registerUser.fulfilled,(state,action)=>{
      const {payload}=action;
      state.user.push(action.payload);
     
    });
    builder.addCase(loginUser.fulfilled,(state,action)=>{

       
     state.login=action.payload;
    
     });

     builder.addCase(logoutUser.fulfilled,(state,action)=>{
      state.login=action.payload;
     })

    builder.addCase(userPost.fulfilled,(state,action)=>{
    
      state.posts.unshift(action.payload);
    })

    builder.addCase(editUserPost.fulfilled,(state,action)=>{
       
    

      const {payload}= action;

     
      if(action.payload=='not matched'){
        return;
      }

      const editPost= state.posts.filter(item=>item.id===payload.id);
      if(editPost)
      {
        editPost[0].content=payload.content;
      }
     
    })
      builder.addCase(deleteUserPost.fulfilled,(state,action)=>{
      const {payload}=action;
      if(action.payload=='not matched'){
        return;
      }
  
      state.posts= state.posts.filter((item)=>item.id!==payload.id)
    })
    builder.addCase(likeUserPost.fulfilled,(state,action)=>{
      const {payload}=action;

     
  
      
      const post=state.posts.find((item)=>item.id==payload.post_id);

  
   
     
      if(post)
      {
        post.likes=action.payload;
        post.meta.likes_count+=1
      }

    
    })

    builder.addCase(unLikeUserPost.fulfilled,(state,action)=>{
      const {payload}=action;

   


     // state.posts=action.payload;

    })


    builder.addCase(postComment.fulfilled,(state,action)=>{
      const {payload}= action;


     
      
      const post= state.posts.find((item)=>item.id===payload.post_id);
   
      if(post){
        post.comments.push(action.payload);
      }
    
   

     })

    builder.addCase(editComment.fulfilled,(state,action)=>{
      const {payload}= action;
      
      if(action.payload=='not matched'){
        return;
      }
      const post= state.posts.filter((item)=>item.id===payload.post_id)
    
      if(post){
        const comment= post[0].comments.filter((item1)=>item1.id===payload.id)
       

        if(comment){
          comment[0].content=payload.content;
        }

        
      }
      else
      {
        return;
      }

    })
    builder.addCase(delComment.fulfilled,(state,action)=>{
      const {payload}=action;
      
      if(action.payload=='not matched'){
        return;
      }
      
      
       const post= state.posts.filter((item)=>item.id===payload.post_id)
   
       if(post){
         post[0].comments= post[0].comments.filter((item1)=>item1.id!==payload.id)
        

   
        
       }
    
     
    })

    builder.addCase(likeComment.fulfilled,(state,action)=>{
      const {payload}=action;

     
   
    
    
   // state.posts=action.payload;
   

      const post= state.posts.filter((item)=>item.id==payload.post_id)
  
      if(post){
        const comment= post[0].comments.filter((item1)=>item1.id==payload.comment_id)
       
       

        if(comment){
           comment[0].commentlikes=action.payload;
           comment[0].meta.commentlikes_count+=1;
       }

       
     }
   
    })

    builder.addCase(unLikeComment.fulfilled,(state,action)=>{
      const {payload}=action;
     
   
    // state.posts=action.payload;
   
    })

    builder.addCase(replyComment.fulfilled,(state,action)=>{

    

      const {payload}= action;

      const post= state.posts.filter((item)=>item.id==payload.post_id);

      if(post){
        const comment= post[0].comments.find((item1)=>item1.id==payload.comment_id);

        if(comment){
          comment.commentreplies.push(action.payload);
        }
      }
         
    
     })



     builder.addCase(editReplyComment.fulfilled,(state,action)=>{
      const {payload}= action;
      
      if(action.payload=='not matched'){
        return;
      }

      const post= state.posts.filter((item)=>item.id==payload.post_id);

      if(post){
        const comment= post[0].comments.filter((item1)=>item1.id==payload.comment_id);

        if(comment){
          const reply= comment[0].commentreplies.filter((it)=>it.id==payload.id);

          if(reply){
            reply[0].content= payload.content;
          }
        }
      }

      
    })

    builder.addCase(delCommentReply.fulfilled,(state,action)=>{
      const {payload}=action;

      if(action.payload=='not matched'){
        return;
      }

      const post= state.posts.filter((item)=>item.id==payload.post_id);

      if(post){
        const comment= post[0].comments.filter((item1)=>item1.id==payload.comment_id);

        if(comment){
          comment[0].commentreplies= comment[0].commentreplies.filter((it)=>it.id!=payload.id);

        }
      }
    
    })

    builder.addCase(likeCommentReply.fulfilled,(state,action)=>{
      const {payload}=action;

     

      const post= state.posts.filter((item)=>item.id==payload.post_id)
  
      if(post){
        const comment= post[0].comments.filter((item1)=>item1.id==payload.comment_id)
        
        
 
        if(comment){
          const reply= comment[0].commentreplies.filter((it)=>it.id==payload.comment_reply_id)

          if(reply){
            reply[0].creply=action.payload;
            reply[0].meta.creply_count+=1;
          }
        }
 
        
      }


      
 
  
   
   
    })

    builder.addCase(delCommentReplyLike.fulfilled,(state,action)=>{
      const {payload}=action;
    
      
   
    })

    




     
  }
 
});


//export const getuser=(state)=>state.user;
export const {getUserPost, getUserDetails,getPostLike, getPostUnlike, getPostComment, getCommentLike, getCommentReply, getCommentReplyLike,userLogin, fetchPostsSuccess, addPost, editPost, addComment,  addReply,likePost,likePost1, likePost2,  deletePost, deletePost_2, deletePost_3  } = testSlice.actions;
export default testSlice.reducer;
