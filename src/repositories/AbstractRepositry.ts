import { getRepository} from "typeorm";
import { Service } from "typedi";


@Service()
export abstract class AbstractRepository<T>{

    private entityClass;
    private entityRepository;
    constructor(entityClass){
        this.entityClass = entityClass;
        this.entityRepository = getRepository(this.entityClass);
    }

    getAll(){
        return this.entityRepository.find()
        .then(entityList => entityList)
        .catch(error => error);
    }

    getOneById(id:number):any{
        return this.entityRepository.findOne(id)
        .then(entity =>  entity)
        .catch(error => error);
    }

    create(entity:T):any{
        return this.entityRepository.save(entity)
        .then(createdEntity =>  createdEntity)
        .catch(error => error);
    }

    update(id:number,updatedEntity:T):any{
       return this.getOneById(id).then(oldEntity =>{
                if(!oldEntity){
                    throw new Error("Not Found")
                }
                return oldEntity
            }).then(oldEntity => {
                    Object.keys(updatedEntity).forEach(
                        (key)=>{
                            if(oldEntity[key] !== undefined){
                                oldEntity[key] = updatedEntity[key] || oldEntity[key];
                            }else{
                                throw new Error("Bad Request")
                            }
                        }
                    )
                return this.entityRepository.save(oldEntity);
                })
    }

    delete(entity:T):void{

    }

}