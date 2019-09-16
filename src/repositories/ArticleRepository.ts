import {injectable} from "inversify";
import {Article} from "../entity/Article";
import {AbstractRepository} from "../repositories/AbstractRepositry"
import "reflect-metadata";

// @injectable()
export class ArticleRepository extends AbstractRepository<Article>{
    
    constructor(){
        super(Article.name);
    }

}


