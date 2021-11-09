import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import masterRouter from './routes/index'; 

const app = express();


// routes
app.use('/', masterRouter);
app.get('*', function (req, res) { res.redirect('/error/notfound') });


// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});