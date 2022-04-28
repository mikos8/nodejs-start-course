import { injectable } from 'inversify';
import { Logger } from 'tslog';
import { ILogger } from './logger.interface';
import 'reflect-metadata'
@injectable()
export class LoggerService implements ILogger{
    public logger: Logger;

    constructor() {
        this.logger = new Logger({
            displayInstanceName: false,
            displayLoggerName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false
        });
    }

    log(...arg:unknown[]){
        this.logger.info(...arg);
    }
    error(...arg:unknown[]){
        this.logger.error(...arg);
    }
    warn(...arg:unknown[]){
        this.logger.warn(...arg);
    }
}