import express from 'express';

let router: express.Router = express.Router();

router.get('/notfound', (req, res) => {
    res.send("<html><h1>NOTFOUND 404</h1></html>");
});

export = router;