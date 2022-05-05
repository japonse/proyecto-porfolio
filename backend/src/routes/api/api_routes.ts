import express from 'express';
import apiController from "../../controllers/api_controller";

let router: express.Router = express.Router();

router.get('/',  (req: express.Request, res: express.Response) => {
    res.send("<html><h1>I'm an API!</h1></html>")
});

router.get('/call', apiController.call);
router.get('/recall', apiController.recall);
router.get('*', function (req, res) { res.redirect('/error/notfound') });

export = router;