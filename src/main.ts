import { App } from './app';
import { Container } from 'inversify';
import { LoggerService } from './logger/logger.service';
import { ILogger } from './logger/logger.interface';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exception.filter';
import { IExceptionFitler } from './errors/exception.filter.interface';
import { TYPES } from './types';
import 'reflect-metadata'


    const appContainer = new Container;
    appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
    appContainer.bind<IExceptionFitler>(TYPES.ExeptionFilter).to(ExeptionFilter);
    appContainer.bind<UserController>(TYPES.UserController).to(UserController);
    appContainer.bind<App>(TYPES.Application).to(App)

    const app = appContainer.get<App>(TYPES.Application);
    app.init();   

export {app, appContainer}