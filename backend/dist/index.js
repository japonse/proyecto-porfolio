"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
app.get('*', function (req, res) { res.send('a'); }); //default route when DB connection fails
// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map