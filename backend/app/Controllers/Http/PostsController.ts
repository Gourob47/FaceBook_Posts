import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";
import { schema } from "@ioc:Adonis/Core/Validator";
import Database from "@ioc:Adonis/Lucid/Database";
export default class PostsController {
  public async create({ view, request }: HttpContextContract) {
    return view.render("createPost");
  }
  public async store({ request, auth }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        content: schema.string({}),
      }),
      messages: {
        "content.required": "Content field is required",
      },
    });

    const post = await Post.create({
      content: req.content,
      userId: auth.user?.id,
    });

    const id = post.id;


    
    const userPost = await Post.query().where("id", id).preload('comments').withCount('likes').withCount('comments');
   


    return userPost[0];

  }
}
