import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Database from "@ioc:Adonis/Lucid/Database";
import Comment from "App/Models/Comment";
import Post from "App/Models/Post";
export default class CommentsController {
  public async store({ request, auth, params }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        content: schema.string({}),
      }),
      messages: {
        "content.required": "Content field is required",
      },
    });

    const comment = await Comment.create({
      content: req.content,
      userId: auth.user?.id,
      postId: params.postid,
    });

    const id = comment.id;

    const userComment = await Comment.query()
      .where("id", id)
      .preload("commentlikes").preload('commentreplies').withCount('commentlikes').withCount('commentreplies');



    
     

    return userComment[0];
  }

  public async edit({ auth, request, params }: HttpContextContract) {
    if (auth.user?.id != params.userid) {
      return 'not matched';
    } else if (auth.user?.id == params.userid) {
      const body = request.body();
      const comment = await Comment.findOrFail(params.commentid);
      comment.content = body.content;

      comment.save();
      return comment;
    }
  }

  public async destroy({ auth, params }: HttpContextContract) {
    if (auth.user?.id != params.userid) {
      return 'not matched';
    } else if (auth.user?.id == params.userid) {
      const comment = await Comment.findOrFail(params.commentid);
      comment.delete();

      return comment;
    }
  }

  public async getComment({}: HttpContextContract) {
    const comment = await Comment.query().preload("commentlikes");
    return comment;
  }
}
