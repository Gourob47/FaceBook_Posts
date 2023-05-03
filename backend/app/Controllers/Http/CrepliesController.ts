import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CommentReply from "App/Models/CommentReply";
import Creply from "App/Models/Creply";

export default class CrepliesController {
  public async store({ params, auth }: HttpContextContract) {
    const userid = auth.user?.id;
    const postid = params.postid;
    const commentid = params.commentid;
    const replyid= params.creplyid;
    const likes = await Creply.query()
      .where("user_id", userid).where('post_id',postid).where('comment_id',commentid)
      .where("comment_reply_id", params.creplyid);
    if (likes.length > 0) {
      return;
    } else if (likes.length == 0) {
      const like = await Creply.create({
        userId: userid,
        postId: postid,
        commentId: commentid,
        commentReplyId: replyid,
      });
      return like;
    }
  }
  public async get({}: HttpContextContract) {
    const like = await CommentReply.query().preload("creply");
    return like;
  }
  public async destroy({ params, auth }: HttpContextContract) {
    if (!auth.user?.id || !params.creplyid) {
      return;
    } else if (auth.user?.id && params.creplyid) {
      const like = Creply.query()
        .where("user_id", auth.user?.id)
        .where("comment_reply_id", params.creplyid);
      await like.delete();
      return like;
    }
  }
}
