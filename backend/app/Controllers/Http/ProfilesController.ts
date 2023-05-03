 import { Request, Response } from '@adonisjs/core/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schema from '@ioc:Adonis/Lucid/Schema';
import User from 'App/Models/User';
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Follow from 'App/Models/Follow';


export default class ProfilesController {
    public async profileView({view,params, auth, request}:HttpContextContract){
    // const username= params.username;
    
    //    const user=await User.findByOrFail('username',username);


    //    if(user)
    //     {
    //         await user.preload('posts')

    //         await user.preload('comments');

    //         await auth.user?.preload('comments');
            
    //         await user.preload('follows')
           
    //         await auth.user?.preload('follows');


    //         await user.preload('likes');

    //         await auth.user?.preload('likes');


    //         await user.preload('commentlikes');
    //         await auth.user?.preload('commentlikes');

    //         await user.preload('commentreplies');
            
    //         await auth.user?.preload('commentreplies');

          



    //     // const follower= await Follow.query().where('user_id',user.username);
    //     // console.log(user)
         
        
    //       return  user;
            
                   
    //        return view.render('profile',{user})
    //     }
    //     else{
    //         return view.render('errors.not-found')
    //     }
    
       
    }

    public async profileEdit({view,params,response}:HttpContextContract){
        return view.render('edit')
    }

    public async editProfile({auth,view,params,response,request}:HttpContextContract){
      
      
         const body= request.body();
    
         const user= await User.findOrFail(auth.user?.id); 
         user.name=body.name;
         user.email=body.email;
         user.username=body.username;
         user.save();
      
      
      
         return  response.redirect(`/${user.username}`);
    }

}
