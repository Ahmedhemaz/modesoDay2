import { getRepository} from "typeorm";
import { Service } from "typedi";


@Service()
export abstract class AbstractRepository<T>{

    private entityClass;
    constructor(entityClass){
        this.entityClass = entityClass;

    }

    getAll(){
        const entityRepository = getRepository(this.entityClass);
        return entityRepository.find().then(entityList => {
            return entityList;
        }).catch(error => error);
    }

    getOneById(id:number):T{
        return
    }

    create(entity:T):void{
        const entityRepository = getRepository(this.entityClass);
        entityRepository.save(entity).catch(error => error);
    }

    update(entity:T):void{

    }

    delete(entity:T):void{

    }

}