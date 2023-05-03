import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class AuthController {
  public async signup({ request }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        name: schema.string(),
        email: schema.string([
          rules.email(),
          rules.unique({ table: "users", column: "email" }),
        ]),
        password: schema.string({}, [rules.minLength(8)]),
        username: schema.string({}),
      }),
      messages: {
        "name.required": "Name is required to sign up",
        "email.required": "Email is required to sign up",
        "username.required": "username is required to sign up",
        "password.required": "Password is required to sign up",
      },
    });

    const user = await User.create({
      name: req.name,
      email: req.email,
      password: req.password,
      username: req.username,
    });

    // await auth.use("web").login(user);
    // response.cookie("user", auth.user);
    // return response.json({ user: auth.user, session });

    return user;
  }

  public async login({
    request,
    auth,
    response,
    session,
  }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    try {
      const user = await auth.use("web").attempt(email, password);
      response.cookie("user", auth.user);
      return response.json({ user: auth.user, session });
    } catch (error) {
      return "Login Failed";
    }

    /*const req = await request.validate({
      schema: schema.create({
        email: schema.string({}, [rules.email()]),
        password: schema.string({}, [rules.minLength(8)]),
      }),
      messages: {
        "email.required": "Email field is required",
        "password.required": "Password field is required",
        "password.minLength": "Password must be at least 8 characters",
      },
    });

    const email = req.email;
    const password= req.password;
    


    const user=await auth.attempt(email, password);
    
    

   
  
   //return response.redirect(`/${user.username}`);
    return user;*/
    //await auth.use("web").authenticate()

    // return user;

    // console.log(auth.use("web").isLoggedIn);
    // Object
  }

  public async store(ctx: HttpContextContract) {
    const k = await ctx.auth.use("web").authenticate();
    return k;
  }

  public async logout({ auth }: HttpContextContract) {
    return await auth.use("web").logout();
  }

  public async getUser({ auth }: HttpContextContract) {
    return auth.user;
  }
}
