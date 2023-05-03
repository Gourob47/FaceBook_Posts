
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pet from 'App/Models/Pet'

import { schema } from '@ioc:Adonis/Core/Validator'

export default class PetsController {
    public async index(ctx:HttpContextContract){

        return  Pet.all()
    }
    public async show({params}:HttpContextContract){
          return Pet.findOrFail(params.id)
    }
    public async store({request, response}:HttpContextContract){

        const newSchema= schema.create(
            {
                name: schema.string({trim: true})
            }
        )
        const payload=  await request.validate({schema:newSchema});
        const pet= await Pet.create(payload);
        /*const body=request.body();
        const pet= await Pet.create(body);
        response.status(201);*/
        response.status(201);
        return pet;
       
        
        /*return {
            message:'Hello pet',
            body: request.body()
        }*/
    }
    public async update({params, request}:HttpContextContract){

        const body= request.body();
        const pet= await Pet.findOrFail(params.id);

        pet.name=body.name;

        return pet.save();

    }
    public async destroy({params}:HttpContextContract){

        const pet= await Pet.findOrFail(params.id);

        return pet.delete()
    }
}
