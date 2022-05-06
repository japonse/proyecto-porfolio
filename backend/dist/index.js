"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const index_1 = __importDefault(require("./routes/index"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
// cookies
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: [process.env.COOKIES_KEY],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
// angular bundle
app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', 'frontend', 'dist', 'angular-heroku')));
// routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use('/', index_1.default); // delegate route management to masterRoute
app.get('/*', function (req, res) { res.sendFile(path_1.default.join(__dirname, '..', '..', 'frontend', 'dist', 'angular-heroku', 'index.html')); });
// connect to the database 
(0, typeorm_1.createConnection)().then((connection) => {
    if (connection === undefined) {
        app.get('*', function (req, res) { res.redirect('/error/dbconnection'); }); // default route when DB connection fails
        throw new Error('Error connecting to database');
    }
}).catch((error) => {
    app.get('*', function (req, res) { res.redirect('/error/dbconnection'); }); // default route when DB connection fails
    throw new Error('Error connecting to database');
});
// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at port: ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map