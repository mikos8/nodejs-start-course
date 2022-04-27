import { LoggerService } from './logger/logger.service';
import { App } from './app';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exception.filter';
import { IExceptionFitler } from './errors/exception.filter.interface';
import { Container } from 'inversify';
import { ILogger } from './logger/logger.interface';
import { TYPES } from './types';


// async function bootstrap() {
    // const logger = new LoggerService();
    // const app = new App(
    //     logger, 
    //     new UserController(logger), 
    //     new ExeptionFilter(logger)
    // );

    const appContainer = new Container;
    appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
    appContainer.bind<IExceptionFitler>(TYPES.ExeptionFilter).to(ExeptionFilter);
    appContainer.bind<UserController>(TYPES.UserController).to(UserController);
    appContainer.bind<App>(TYPES.Application).to(App)

    const app = appContainer.get<App>(TYPES.Application);
    app.init();   
// } 

// bootstrap();

export {app, appContainer}