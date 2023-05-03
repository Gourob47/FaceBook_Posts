  /*signupUser:(state,action)=>{
       const {payload}=action;
       console.log(payload)
       console.log(payload.created_at)
       const newUser={
          id:payload.created_at,
          name: payload.name,
          email: payload.email,
          username: payload.username,
          password: payload.password

       }
       state.user.unshift(newUser);
    },
    loginUser:(state,action)=>{
      const {payload}= action;
      console.log(payload);
    },

  
    addPost: (state, action) => {
      let Id = Date.now();
      const {payload}=action;
      const newPost = {
        id: Id,
        content: action.payload,
        counter:0,
        postComments: [],
      };
      state.posts.unshift(newPost);
    },
    editPost:(state,action)=>{
      const {payload}=action;

      const editPost= state.posts.filter(item=>item.id===payload.post_id);
      if(editPost)
      {
        editPost[0].content=payload.content;
      }
    },
  
    
    addComment: (state, action) => {
      const { payload } = action;
      const post = state.posts.find((item) => item.id === payload.post_id);
      console.log(action.payload);
      post.postComments.push({
        id: payload.id,
        text: payload.text,
        replyComment: [],
        counter:0,
      });
    },
    
    editComment:(state,action)=>{
      const {payload}=action;
      const post = state.posts.findIndex((item) => item.id === payload.post_id);
      const comment=state.posts[post].postComments.filter((item)=>item.id===payload.com_id);
      if(comment)
      {
        comment[0].text=payload.text;
      }
    },

    likePost:(state,action)=>{
      const {payload}=action;
      const post = state.posts.find((item) => item.id === payload.post_id);
     
      if(post)
      {
        post.counter+=1;
        console.log(post.counter)
      }
      if(post.counter===2)
      {
        post.counter=0
      }
      
      
    },
    likePost1:(state,action)=>{
      const{payload}=action;
      console.log(payload);

      const post=state.posts.findIndex((item)=>item.id===payload.post_id)
      const comment=state.posts[post].postComments.find((item)=>item.id===payload.com_id);
     // console.log(comment);
      if(comment)
      {
        comment.counter+=1;
      }
      if(comment.counter==2)
      {
        comment.counter=0;
      }

      
 
    },
    likePost2:(state,action)=>{
      const{payload}=action;
      console.log(payload);
      const post=state.posts.findIndex((item)=>item.id===payload.post_id)
      const comment=state.posts[post].postComments.findIndex((item)=>item.id===payload.com_id);
      const reply=state.posts[post].postComments[comment].replyComment.find((item)=>item.id===payload.rep_id);
      if(reply)
      {
        reply.counter+=1;
      }
      if(reply.counter==2)
      {
        reply.counter=0;
      }
      console.log(reply.counter);

    },
    addReply: (state, action) => {
      const { payload } = action;
      const comment = state.posts.findIndex(
        (item) => item.id === payload.com1_id
      );
      console.log(comment);
      const comment1 = state.posts[comment].postComments.findIndex(
        (item) => item.id === payload.com_id
      );
      console.log(comment1);

      state.posts[comment].postComments[comment1].replyComment.push({
        id: payload.id,
        text: payload.text,
        counter:0
      });
    },
    editReplyComment:(state,action)=>{
      const {payload}=action;
      const post = state.posts.findIndex((item) => item.id === payload.post_id);
      const comment=state.posts[post].postComments.findIndex(item=>item.id===payload.com_id);

      const reply=state.posts[post].postComments[comment].replyComment.filter((item)=>item.id===payload.rep_id);
      if(reply)
      {
        reply[0].text=payload.text;
      }

    },

    deletePost:(state,action)=>{
      const {payload}=action;
      state.posts= state.posts.filter((item)=>item.id!==payload.id)
    },
    deletePost_2:(state,action)=>{
      const {payload}=action;
      
      const del=state.posts.findIndex(item=>item.id===payload.post)
      state.posts[del].postComments=state.posts[del].postComments.filter(item=>item.id!==payload.id);
    },

    deletePost_3:(state,action)=>{
      const{payload}=action;
      const del=state.posts.findIndex(item=>item.id===payload.post);
      const del1=state.posts[del].postComments.findIndex(item=>item.id===payload.com);
      state.posts[del].postComments[del1].replyComment= state.posts[del].postComments[del1].replyComment.filter(item=>item.id!==payload.id)
    }
  
  },*/
