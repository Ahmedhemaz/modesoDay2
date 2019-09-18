import { AbstractRepository } from "./AbstractRepositry";
import { User } from "../entity/User";
import { Service } from "typedi";
import "reflect-metadata"

@Service()
export class UserRepository extends AbstractRepository<User>{
    constructor(){
        super(User.name);
    }
}