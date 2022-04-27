import { UserController } from './users/users.controller';
import { LoggerService } from './logger/logger.service';
import express, { Express } from "express";
import { userRouter } from "./users/users";
import { Server } from "http";
import { ExeptionFilter } from './errors/exception.filter';
import { ILogger } from './logger/logger.interface';

export class App {
    app: Express;
    port: number;
    server: Server;
    logger: ILogger;
    userController:UserController;
    exeptionFilter: ExeptionFilter;

    constructor(
        logger:ILogger,
        userController:UserController,
        exeptionFilter: ExeptionFilter
    ){
        this.app = express();
        this.port = 9090;
        this.logger = logger;
        this.userController = userController;
        this.exeptionFilter = exeptionFilter;
    }

    useRoutes(){
        this.app.use('/users', this.userController.router)
    };

    useExceptionFilters(){
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
    }

    public async init(){
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`сервер запущен на http://localhost:${this.port}`)
    }
}