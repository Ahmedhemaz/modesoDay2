import {Article} from "../entity/Article";
import {AbstractRepository} from "../repositories/AbstractRepositry"
import "reflect-metadata";
import { Service } from "typedi";

@Service()
export class ArticleRepository extends AbstractRepository<Article>{
    
    constructor(){
        console.log("ARticle repo constructor");
        super(Article.name);
    }

}


