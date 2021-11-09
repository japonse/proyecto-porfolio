import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createConnection } from "typeorm"; 
import masterRouter from './routes/index'; 

const app = express();
console.log('STARTED');

// connect to the database 
/*
createConnection().then((connection) => {
    if (connection === undefined) {
        app.get('*', function (req, res) { res.redirect('/error/dbconnection') }); //default route when DB connection fails
        throw new Error('Error connecting to database');
    } else { 
        app.use((req, res, next) => { //make CORS not complain
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
        app.use('/', masterRouter); //delegate route management to masterRoute
        app.get('*', function (req, res) { res.redirect('/error/notfound') }); //default route
    }
}).catch((error)=>{
   
});*/

app.get('*', function (req, res) { res.redirect('/error/dbconnection') }); //default route when DB connection fails



// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});