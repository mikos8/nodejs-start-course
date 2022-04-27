import express, { Response, Request, NextFunction} from 'express';
import { userRouter} from '../src/users/users.js';
import { rmSync } from 'fs';
import http from 'http';

const app = express();

const host = '127.0.0.1';
const port = 8000;

app.use((req: Request, res: Response, next: NextFunction)=>{
  console.log('Time: ', Date.now());
  next();
})

// app.all('/hello', (req, res, next) => {
//     console.log('All');
//     next();
// })

// const cb = (req, res, next) => {
//     console.log('CB');
//     next();
// }

// ? + *

app.get('/hel?lo', (req: Request, res: Response)=>{ 
    // res.status(201).json({success: true, attr: 'test'})
    // res.redirect(301,'http://google.kz')
    // res.download('./test.png')
    // res.type('application/json')
    // res.append('Warning','code');
    // res.set('Content-Type','text-plain');
    // res.send({success: true})
    // res.cookie('token','tokenparametr', {
    //     domain:'',
    //     path: '/',
    //     secure: true,
    //     expires: 60000 //milisecund when this delete
    // })
    // res.send('hgesadadea')
    // res.end()
    throw new Error('Error!!!')
})

app.use('/users', userRouter)

app.use((err: Error, req: Request, res:Response, next:NextFunction)=>{
  console.log(err.message);
  res.status(500).send(err.message);
})

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Get a random book post');
  })

app.post('/hello', (req, res) =>{
    console.log('post req express: response it here')
    res.send('hello express: post')
})

app.listen(port, () =>{
    console.log(`сервер запущен на http://localhost:${port}`)
})





// const server = http.createServer((req, res)=>{
//     switch(req.method) {
//         case 'GET':
//             console.log('get');
//         default:
//             break 
//     };
//     req.url;
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello')
// })

// server.listen(port, host, ()=>{
//     console.log(`сервер запущен на ${host}:${port}`)
// })