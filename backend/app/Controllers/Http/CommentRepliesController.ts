import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import CommentReply from "App/Models/CommentReply";
export default class CommentRepliesController {
  public async create({ params, request, auth }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        content: schema.string({}),
      }),
      messages: {
        "content.required": "Content field is required",
      },
    });

    const commentreply = await CommentReply.create({
      userId: auth.user?.id,
      postId: params.postid,
      commentId: params.commentid,
      content: req.content,
    });

    const id = commentreply.id;

    const userCommentReply = await CommentReply.query()
      .where("id", id)
      .preload("creply").withCount('creply');

    return userCommentReply[0];
  }

  public async getreply({}: HttpContextContract) {
    const commentreply = await CommentReply.query().preload("creply").withCount('creply');

    return commentreply;
  }

  public async edit({ params, request, auth }: HttpContextContract) {
    if (auth.user?.id != params.userid) {
      return 'not matched';
    } else if (auth.user?.id == params.userid) {
      const body = request.body();
      const commentreply = await CommentReply.findOrFail(params.commentreplyid);
      commentreply.content = body.content;

      commentreply.save();
      return commentreply;
    }
  }

  public async destroy({ auth, params }: HttpContextContract) {
    if (auth.user?.id != params.userid) {
      return 'not matched';
    } else if (auth.user?.id == params.userid) {
      const commentreply = await CommentReply.findOrFail(params.commentreplyid);
      commentreply.delete();

      return commentreply;
    }
  }
}
