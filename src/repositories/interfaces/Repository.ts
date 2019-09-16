export interface Repository<T>{
    
    getAll();

    getOneById(id:number):T;

    create(entity:T):void;

    update(entity:T):void;

    delete(entity:T):void;

}