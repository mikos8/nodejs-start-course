import express from "express";

const userRouter = express.Router(); 

userRouter.use((req, res, next)=>{
    console.log('обработчик пользователя.');
    next();
})

userRouter.post('/login', (req,res)=>{
    res.end('login')
})

userRouter.post('/register', (req,res)=>{
    res.end('register')
})

export {userRouter};