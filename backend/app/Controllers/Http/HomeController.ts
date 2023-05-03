import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import Comment from "App/Models/Comment";
import Like from "App/Models/Like";
import Post from "App/Models/Post";
import User from "App/Models/User";
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";

export default class HomeController {
  public async index({ auth }: HttpContextContract) {
  
    if(!auth.user?.id){
      return;
    }
    
    const post= await Post.query().preload('comments',(q)=>{
      q.preload('commentreplies',(q)=>{
        q.preload('creply',(q)=>{
          q.where('user_id',auth.user?.id)
        }).withCount('creply')
      }).preload('commentlikes',(q)=>{
        q.where('user_id',auth.user?.id)
      }).withCount('commentreplies').withCount('commentlikes')
    }).preload('likes',(q)=>{
      q.where('user_id',,auth.user?.id)
    }).withCount('likes').withCount('comments')



    // const post = await Post.query()
    //   .preload("comments", (comment) => {
       
    //       comment.withCount("commentlikes")
    //       .withCount("commentreplies")
    //       .preload("commentreplies")
    //       .preload("commentlikes", (q) => {
    //         q.where("user_id", auth.user?.id);
    //       });
    //   })
    //   .withCount("likes")
    //   .withCount("comments").preload('likes',(q)=>{
    //     q.where('user_id',auth.user?.id)
    //   })
    

    // const users = await Database.from('users')
    // .from('posts').leftJoin('comments', 'posts.id', 'comments.post_id').count('comments.id as comment_count')
    // .leftJoin('comment_replies','comments.id','comment_replies.comment_id')
    // .count('comment_replies.id as comment_replies_count')
    // .groupBy('users.id')

    // const users = await Database
    // .from('posts')
    // .leftJoin('comments', 'posts.id', 'comments.post_id')
    // .leftJoin('comment_replies', 'comments.id', 'comment_replies.comment_id')
    // .select(
    //   // 'users.id as user_id',
    //   // 'users.name as user_name',
    //  //  'posts.id as post_id',
    //   // 'posts.content as post_content',
    //    //  'comments.id as comment_id',
    //   // 'comments.content as comment_comtent'
    // )
    // .select(Database.raw('COUNT(DISTINCT posts.id) AS post_count'))
    // .select(Database.raw('COUNT(DISTINCT comments.id) AS comment_count'))
    // .select(Database.raw('COUNT(DISTINCT comment_replies.id) AS comment_reply_count'))
    // .groupBy('posts.id')

    // post.forEach((post) => {
    //   console.log(post.$extras.comments_count)
    // })

 
    
   
  
   

    return post;
  }
}
