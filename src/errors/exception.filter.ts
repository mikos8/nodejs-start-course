import { Response, NextFunction, Request } from 'express';
import { inject, injectable } from 'inversify';
import { ILogger } from 'src/logger/logger.interface';
import { LoggerService } from 'src/logger/logger.service';
import { TYPES } from 'src/types';
import { IExceptionFitler } from './exception.filter.interface';
import { HTTPError } from './http-error.class';

@injectable()
export class ExeptionFilter implements IExceptionFitler {
    constructor(@inject(TYPES.ILogger) private logger: ILogger) { }

    catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {

        if (err instanceof HTTPError) {
            this.logger.error(`[${err.context}] Ошибка -: ${err.statusCode} :: ${err.message}`);
            res.status(err.statusCode).send({ err: err.message });
        } else {
            this.logger.error(` ${err.message}`);
            res.status(500).send({ err: err.message });
        }
    }


} 