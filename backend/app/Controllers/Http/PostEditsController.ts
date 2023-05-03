import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";

export default class PostEditsController {
  public async create({ view, params }: HttpContextContract) {
    const user = params.userid;
    const post = params.postid;
    return view.render("editPost", { user, post });
  }

  public async edit({ request, auth, params }: HttpContextContract) {
    if (auth.user?.id != params.userid) {
      return 'not matched';
    } else if (auth.user?.id == params.userid) {
      const body = request.body();
      const post = await Post.findOrFail(params.postid);
      post.content = body.content;
      post.save();

      return post;
    }
  }
  public async destroy({ auth, params }: HttpContextContract) {
    if (auth.user?.id != params.userid) {
      return 'not matched';
    } else if (auth.user?.id == params.userid) {
      const post = await Post.findOrFail(params.postid);
      post.delete();
      return post;
    }
  }
}
