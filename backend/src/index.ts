import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createConnection } from "typeorm"; 
import masterRouter from './routes/index'; 

const app = express();
console.log('STARTED');

// routes
app.use((req, res, next) => { //make CORS not complain
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use('/', masterRouter); //delegate route management to masterRoute

// connect to the database 
console.log('TRIED TO CONNECT');
console.log(process.env.PORT ?? 'nohay');
console.log(process.env.DB_PORT ?? 'nohay');
console.log(process.env.DB_HOST ?? 'nohay');
console.log(process.env.DB_DATABASE ?? 'nohay');
console.log(process.env.DB_PASSWORD ?? 'nohay');
console.log(process.env.DB_USERNAME ?? 'nohay');
console.log(process.env.ENTITIES_PATH ?? 'nohay');
console.log(process.env.MIGRATIONS_PATH ?? 'nohay');

createConnection().then((connection) => {
    if (connection === undefined) {
        app.get('*', function (req, res) { res.redirect('/error/dbconnection') }); //default route when DB connection fails
        console.log('BAD CONNECT 1');
    } else { 
        console.log('CONNECT SUCESS');
        app.get('*', function (req, res) { res.redirect('/error/notfound') }); //default route
    }
}).catch((error)=>{
    console.log('BAD CONNECT 2');

    console.log('error',error);

    app.get('*', function (req, res) { res.redirect('/error/dbconnection') }); //default route when DB connection fails
});


// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});