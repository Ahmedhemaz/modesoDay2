import { ClassType } from "class-transformer/ClassTransformer";
import {getRepository, createConnection, Connection} from "typeorm";
import {Repository} from "../repositories/interfaces/Repository";
import { Article } from "../entity/Article";

export abstract class AbstractRepository<T> implements Repository<T>{

    private entityClass:ClassDecorator;
    constructor(entityClass){
        this.entityClass = entityClass;
    }

    getAll(){
        createConnection().then(async connection =>{
            const entityRepository =  connection.getRepository(this.entityClass);
            return  entityRepository.find() ;
        }) .catch(error => console.log(error));
    }

    getOneById(id:number):T{
        return
    }

    create(entity:T):void{
        createConnection().then(async connection => {
            
            const entityRepository = connection.getRepository(Article);
            await entityRepository.save(entity);
            console.log(entity)

        }).catch(error => console.log(error));

    }

    update(entity:T):void{

    }

    delete(entity:T):void{

    }

}