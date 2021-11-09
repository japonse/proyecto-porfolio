import express from 'express';
import {createConnection} from "typeorm";

let router: express.Router = express.Router();

router.get('/', (req, res) => {
    res.send("<html><h1>I'm an API!</h1></html>");
});

export = router;