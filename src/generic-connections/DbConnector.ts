import {createConnection, Connection} from "typeorm";
export class DbConnector{
    
    private static inestance:DbConnector;
    private dbConnection:Connection;
    private constructor(){
        createConnection().then(dbConnection => {
            this.dbConnection = dbConnection;
        });   
    }

    static getInestance(){
        if(!DbConnector.inestance){
            DbConnector.inestance = new DbConnector();
        }
        return DbConnector.inestance;
    }
    
    public getDbConnection(){
        return this.dbConnection;
    }

    public openDbConnection(){
        this.dbConnection.connect();
    }

    public closeDbConnection(){
         this.dbConnection.close();
    }


}