 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Follow from 'App/Models/Follow'

export default class FollowsController {
    public async store({view,params,request,auth,response}:HttpContextContract){
       // return params.userid

       const follow= new Follow();

       follow.userId= auth.user?.id;
       follow.followingId= params.userid

       await follow.save();

     //  return  response.redirect().back();
    }

    public async destroy({view,params, request,auth, response}:HttpContextContract){

        const follow= Follow.query().where('user_id',auth.user.id).where('following_id',params.userid)
        await follow.delete();
     //   return response.redirect().back();

    }
}
