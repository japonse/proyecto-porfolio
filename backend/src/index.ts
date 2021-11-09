import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

app.get('*', function (req, res) { res.send('Hello world2') });

// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});