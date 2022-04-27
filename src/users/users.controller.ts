import { NextFunction, Response, Request } from 'express';
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";



export class UserController extends BaseController {


    constructor(
        logger: LoggerService
    ) {
        super(logger);
        this.bindRoutes([
            { path: '/register', method: 'post', func: this.register },
            { path: '/login', method: 'post', func: this.login },
        ])
    }

    login(req: Request, res: Response, next: NextFunction): void {
        this.ok(res, 'login')
    }

    register(req: Request, res: Response, next: NextFunction): void {
        this.ok(res, 'register')
    }
}