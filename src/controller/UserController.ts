import Container, { Service } from "typedi";
import { JsonController, Get, Res, Post, Body } from "routing-controllers";
import { UserRepository } from "../repositories/UserRepository";
import { Response } from "express";
import { User } from "../entity/User";



@Service()
@JsonController()
export class UserController{
    private userRepository:UserRepository;
    constructor(){
        this.userRepository = Container.get(UserRepository);
    }

    @Get("/users")
    getAll(@Res() response:Response){
        return this.userRepository.getAll().then(users => {
            if(users === null){
                return response.status(204).send({message: "No Content"})
            }
            return response.status(200).send({data:users})
        }).catch(()=> {
            return response.status(400).send({message:"Bad Request"});
        })
    }

    
    @Post("/users")
    create(@Body() user:User){
        return this.userRepository.create(user);
    }


}