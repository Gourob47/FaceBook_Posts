import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

/*const initialPosts = {
    posts:[        
        {
            id:1,
            postDesc:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            reactCount:0,
            disabled:false,

            comments:[
                {
                    postId:1,
                    commentId:1,
                    body:"post id 1 comment",


                }
            ]
            
        },
    {
        id:2,
        postDesc:"Sé discerniamo e infiniti alle al beato. Infiniti io e nostra il eterni se il coloro la, novella potendo sue la fu in sí. Piú nel a essaudisce cose. Noi che parte fragilita e informati delle sua. Di e essilio e e in e a vita, sempre cospetto quegli udita.",
        reactCount:0,
        disabled:false,
        comments:[
            {
                postId:2,
                commentId:2,
                body:"post id 2 comment",


            }
        ]
       
    },
    ]
}



const PostSlice = createSlice({
    name : "posts",
    initialState:initialPosts,
    reducers: {
        viewPosts:(state)=>state,
        // createPost:(state,action)=>{
        //     state.posts.unshift(action.payload)
        // },
        // reactCountIncrementAction:(state,action)=>{
        //     const id = action.payload;
        //     console.log(id);
   
        //     const isPostExit= state.posts.filter((post)=>post.id ==id);
           

        //     if(isPostExit){
        //         isPostExit[0].reactCount = isPostExit[0].reactCount + 1;
        //         isPostExit[0].disabled = true;
        //     }
        // },
        // reactCountDeccrementAction:(state,action)=>{
        //     const id = action.payload;
        //     console.log(id);
   
        //     const isPostExit= state.posts.filter((post)=>post.id ==id);
           

        //     if(isPostExit){
        //         isPostExit[0].reactCount = isPostExit[0].reactCount - 1;
        //         isPostExit[0].disabled = false;
        //     }
        // },
        // editPostAction:(state,action)=>{
        //     const {id,postDesc,reactCount,disabled} = action.payload;
      
        //     const isPostExit= state.posts.filter((post)=>post.id === id)
      

        //     if(isPostExit){
        //         isPostExit[0].postDesc = postDesc;
        //         isPostExit[0].reactCount = reactCount;
        //         isPostExit[0].disabled = disabled;
        //     }
        // },
        // deletePostAction:(state,action)=>{
        //     const id = action.payload;
        //     state.posts=state.posts.filter(post =>post.id !== id)
        // },
        // commentAddAction:(state,action)=>{
        //     const commentInfo = action.payload;
        //     const {postId,commentId,body} = commentInfo;
        //     const isPostExit= state.posts.filter((post)=>post.id === postId)

        //     isPostExit[0].comments.push(commentInfo)
        // }


    }
})


export const {viewPosts}=PostSlice.actions;
export default PostSlice.reducer;*/