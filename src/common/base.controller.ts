import { ILogger } from '../logger/logger.interface';
import { IRoute } from './route.interface';
import { Response, Router } from "express";
import { injectable } from 'inversify';
import 'reflect-metadata'
@injectable()
export abstract class BaseController {
    private readonly _router: Router;
    constructor(
        private logger: ILogger
    ) {
        this._router = Router()
    }

    get router() {
        return this._router;
    }

    public send<T>(res: Response, code: number, message: T) {
        res.type('application/json');
        return res.status(code).json(message);
    }

    public ok<T>(res: Response, message: T) {
        this.send<T>(res, 200, message);
    }

    public created(res: Response) {
        res.sendStatus(201);
    }

    protected bindRoutes(routes: IRoute[]) {

        for (const route of routes) {
            this.logger.log(`[${route.method}]  ${route.path}`)
            const handler = route.func.bind(this);
            this.router[route.method](route.path, route.func)
        }

    }
}