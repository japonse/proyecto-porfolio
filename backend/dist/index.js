"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
console.log('STARTED');
// routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use('/', index_1.default); //delegate route management to masterRoute
// connect to the database 
console.log('TRIED TO CONNECT');
console.log((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 'nohay');
console.log((_b = process.env.DB_PORT) !== null && _b !== void 0 ? _b : 'nohay');
console.log((_c = process.env.DB_HOST) !== null && _c !== void 0 ? _c : 'nohay');
console.log((_d = process.env.DB_DATABASE) !== null && _d !== void 0 ? _d : 'nohay');
console.log((_e = process.env.DB_PASSWORD) !== null && _e !== void 0 ? _e : 'nohay');
console.log((_f = process.env.DB_USERNAME) !== null && _f !== void 0 ? _f : 'nohay');
console.log((_g = process.env.ENTITIES_PATH) !== null && _g !== void 0 ? _g : 'nohay');
console.log((_h = process.env.MIGRATIONS_PATH) !== null && _h !== void 0 ? _h : 'nohay');
(0, typeorm_1.createConnection)().then((connection) => {
    if (connection === undefined) {
        app.get('*', function (req, res) { res.redirect('/error/dbconnection'); }); //default route when DB connection fails
        console.log('BAD CONNECT 1');
        throw new Error('Error connecting to database');
    }
    else {
        console.log('CONNECT SUCESS');
        app.get('*', function (req, res) { res.redirect('/error/notfound'); }); //default route
    }
}).catch((error) => {
    console.log('BAD CONNECT 2');
    app.get('*', function (req, res) { res.redirect('/error/dbconnection'); }); //default route when DB connection fails
});
// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map