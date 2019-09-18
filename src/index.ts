import "reflect-metadata";
import {createExpressServer } from "routing-controllers";
import { ArticleController } from "./controller/ArticleController";
import { UserController } from "./controller/UserController";
import { DbConnector } from "./generic-connections/DbConnector";
import {Container} from "typedi";
import { useContainer } from "typeorm";



const port: number = 8080;
const dbConnection = DbConnector.getInestance();
useContainer(Container);
const app = createExpressServer({
    controllers: [UserController,ArticleController]
})

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
})
