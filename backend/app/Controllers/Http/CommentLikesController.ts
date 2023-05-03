import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Comment from "App/Models/Comment";
import CommentLike from "App/Models/CommentLike";
import Post from "App/Models/Post";

export default class CommentLikesController {
  public async store({ params, auth }: HttpContextContract) {
    const userid = auth.user?.id;
    const postid = params.postid;
    const commentid = params.commentid;

    const likes = await CommentLike.query()
      .where("user_id", userid)
      .where("post_id", postid)
      .where("comment_id", commentid);

    if (likes.length > 0) {
      return;
    } else if (likes.length == 0) {
      const commentLike = await CommentLike.create({
        userId: userid,
        postId: postid,
        commentId: commentid,
      });
      return commentLike;

 
    }
  }

  public async get({}: HttpContextContract) {
    const commentLike = await Comment.query().preload("commentlikes");
    return commentLike;
  }

  public async destroy({ params, auth }: HttpContextContract) {
    const userid = auth.user?.id;
    const postid = params.postid;
    const commentid = params.commentid;
    if (!userid || !postid || !commentid) {
      return;
    } else if (userid && postid && commentid) {
      const commentLike = CommentLike.query()
        .where("user_id", userid)
        .where("post_id", postid)
        .where("comment_id", commentid);
      await commentLike.delete();
     
      return commentLike;
    }
  }
}
