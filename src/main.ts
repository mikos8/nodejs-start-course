import { App } from './app';
import {Container, ContainerModule, interfaces} from 'inversify';
import { LoggerService } from './logger/logger.service';
import { ILogger } from './logger/logger.interface';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './errors/exception.filter';
import { IExceptionFitler } from './errors/exception.filter.interface';
import { TYPES } from './types';
import 'reflect-metadata'


    export const appBindings = new ContainerModule((bind:interfaces.Bind)=>{
        bind<ILogger>(TYPES.ILogger).to(LoggerService);
        bind<IExceptionFitler>(TYPES.ExeptionFilter).to(ExeptionFilter);
        bind<UserController>(TYPES.UserController).to(UserController);
        bind<App>(TYPES.Application).to(App)
    })

    function bootstrap(){
        const appContainer = new Container;
        appContainer.load(appBindings);
        const app = appContainer.get<App>(TYPES.Application);
        app.init();
        return {app, appContainer}
    }

    export const {app, appContainer} = bootstrap();



