import { Response } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
  public async handle({auth, response}: HttpContextContract, next: () => Promise<void>) {

    // code for middleware goes here. ABOVE THE NEXT CALL

    if(auth.isGuest){
    await next()
    }
    else
    {
      return  response.json(auth.user);
     // return response.redirect(`/${auth.user?.username}`);
    }
  }
}
