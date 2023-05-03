import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Like from "App/Models/Like";
import Post from "App/Models/Post";

export default class LikesController {
  public async store({
    
    params,
    auth,
   
  }: HttpContextContract) {
    const userid = auth.user?.id;
    const postid = params.postid;

    const likes = await Like.query()
      .where("user_id", userid)
      .where("post_id", postid);

    if (likes.length > 0) {
      return;
    } else if (likes.length == 0) {
      const like = await Like.create({
        postId: postid,
        userId: userid,
      });

      return like;

     
    }
  }

  public async getLike({ }: HttpContextContract) {
    return Like.all();
  }

  public async destroy({  auth, params }) {
    const userid = auth.user?.id;
    const postid = params.postid;

    if (!userid || !postid) {
      return;
    } else if (userid && postid) {
      const likes = await Like.query()
        .where("user_id", userid)
        .where("post_id", postid)
        .delete();

       return likes;
    }
  }
}
