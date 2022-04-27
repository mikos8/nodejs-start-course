import { TYPES } from './types';
import { UserController } from './users/users.controller';
import express, { Express } from "express";
import { Server } from "http";
import { ExeptionFilter } from './errors/exception.filter';
import { ILogger } from './logger/logger.interface';
import { inject, injectable } from 'inversify';
import 'reflect-metadata'

@injectable()
export class App {
    app: Express;
    port: number;
    server: Server;

    constructor(
        @inject(TYPES.ILogger) private logger:ILogger,
        @inject(TYPES.UserController) private userController:UserController,
        @inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter
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