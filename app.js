import express from 'express'
const app = express();

import cors from 'cors'
app.use(cors({
    origin: [ "http://127.0.0.1:5173", "http://localhost:5173" ],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))



import path  from "node:path";
import session from "express-session";
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local'

import { logins } from "./auth/passport.js"
logins(passport)


const __dirname= path.resolve

import  { indexRouter } from "./routes/indexRouter.js";
import { authRouter } from "./routes/authRouter.js";
import { messageRouter } from "./routes/messageRouter.js";


app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json())
app.use(session({ secret: "cats", resave: false, saveUninitialized: false, cookie: {secure: false, httpOnly: true, }, }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));



app.use('/', indexRouter);
app.use('/auth', authRouter)
app.use('/message', messageRouter)


const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first express app on port ${PORT}`)
})