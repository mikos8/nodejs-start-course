import { Request, Response, NextFunction, Router } from 'express';


export interface IRoute {
    path: string;
    method: keyof Pick <Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
    func: (req: Request, res: Response, next: NextFunction) => void;
}



// method: 'get' | 'post' | 'delete' | 'path' | 'put'