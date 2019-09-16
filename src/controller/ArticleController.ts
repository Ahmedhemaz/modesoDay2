import {Controller, Param, Body, Get, Post, Put, Delete, JsonController, Res} from "routing-controllers";
import {getRepository} from "typeorm";
import { Article } from "../entity/Article";
import {ArticleRepository} from "../repositories/ArticleRepository";
import { Request, Response } from "express";

@JsonController()
export class ArticleController{

    
    @Get("/articles")
    getAll(@Res() response:Response){
        const articlesRepo =  new ArticleRepository();
        const articles = articlesRepo.getAll();
        console.log(articles);
        return response.send(articles)  ; 
    }

    @Post("/articles")
    create(@Body() article:Article){
        new ArticleRepository().create(article);
        return "Done"
    }
}