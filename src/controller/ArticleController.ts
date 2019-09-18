import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, Res, OnUndefined, HttpCode} from "routing-controllers";
import { Article } from "../entity/Article";
import {ArticleRepository} from "../repositories/ArticleRepository";
import { Response } from "express";
import Container, { Service } from "typedi";

@Service()
@JsonController()
export class ArticleController{

    private articleRepository:ArticleRepository;
    constructor(){
        this.articleRepository = Container.get(ArticleRepository); 
    }
    
    @Get("/articles")
    getAll(@Res() response:Response){
        return this.articleRepository.getAll().then(articles => {
            if(articles === null){
                return response.status(204).send({message:"No Content"})
            }
                return response.status(200).send({data:articles});
            }).catch(() => {
             return response.status(400).send({message:"Bad Request"})
            });
    }

    @Get("/articles/:id")
    getOne(@Param("id") id:number, @Res() response:Response){
        return this.articleRepository.getOneById(id)
        .then(article => {
            if(!article){
                return response.status(404).send({message:"Not Found"})
            }
            return response.status(200).send({data:article});
        })
        .catch(()=>{
            return response.status(400).send({message: "Bad Request"});
        })
    }


    @HttpCode(201)
    @Post("/articles")
    create(@Body() article:Article){
        return  this.articleRepository.create(article);
    }


    @Put("/articles/:id")
    update(@Param("id") id:number, @Res() response:Response, @Body() article:Article){
       return this.articleRepository.update(id,this.serializeRequest(article))
            .then(article => {
                return response.status(201).send({data:article});
            })
            .catch(error => {
                return response.status(400).send({message:error.message}); 
            });
    }

    private serializeRequest({title,description,status}):any {
        return {title,description,status};
    }

}