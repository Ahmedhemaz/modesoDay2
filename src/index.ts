import "reflect-metadata";
import {createExpressServer } from "routing-controllers";
import { UserController } from "./controller/UserController";
import { ArticleController } from "./controller/ArticleController";
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

// createConnection().then(async connection => {

//     // create express app
//     const app = express();
//     app.use(bodyParser.json());

//     // register express routes from defined application routes
//     Routes.forEach(route => {
//         (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
//             const result = (new (route.controller as any))[route.action](req, res, next);
//             if (result instanceof Promise) {
//                 result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

//             } else if (result !== null && result !== undefined) {
//                 res.json(result);
//             }
//         });
//     });

//     // setup express app here
//     // ...

//     // start express server
//     app.listen(3000);

//     // insert new users for test
//     await connection.manager.save(connection.manager.create(User, {
//         firstName: "Timber",
//         lastName: "Saw",
//         age: 27
//     }));
//     await connection.manager.save(connection.manager.create(User, {
//         firstName: "Phantom",
//         lastName: "Assassin",
//         age: 24
//     }));

//     console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

// }).catch(error => console.log(error));
