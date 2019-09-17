import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, Res} from "routing-controllers";
import { Article } from "../entity/Article";
import {ArticleRepository} from "../repositories/ArticleRepository";
import { Request, Response } from "express";
import Container, { Inject, Service } from "typedi";

@Service()
@JsonController()
export class ArticleController{

    private articleRepository:ArticleRepository;
    constructor(){
        this.articleRepository = Container.get(ArticleRepository); 
    }
    
    @Get("/articles")
    getAll(@Res() response:Response){
        console.log("this.articleRepo: "+this.articleRepository)
        return this.articleRepository.getAll().then(articles => {
            if(articles === null){
                return response.status(204).send({message:"No Content"})
            }
                return response.status(200).send({data:articles});
            }).catch(() => {
             return response.status(400).send({message:"Bad Request"})
            });
    }

    @Post("/articles")
    create(@Body() article:Article){
        this.articleRepository.create(article);
        return "Done"
    }
}