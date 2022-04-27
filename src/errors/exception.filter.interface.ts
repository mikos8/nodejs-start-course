import { NextFunction, Response, Request } from "express";
import { HTTPError } from "./http-error.class";

export interface IExceptionFitler {
    catch: (err: Error | HTTPError,
        req: Request,
        res: Response,
        next: NextFunction) => void;
}
