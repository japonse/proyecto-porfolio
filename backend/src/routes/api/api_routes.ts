import express from 'express';
import apiController from "../../controllers/api_controller";

import passport from 'passport';


let router: express.Router = express.Router();

router.get('/',  (req: express.Request, res: express.Response) => {
    res.send("<html><h1>I'm an API!</h1></html>")
});
router.get('/login', apiController.login);
router.get('/call', apiController.call);
router.get('/recall', apiController.recall);
router.post('/auth', passport.authenticate('local', { failureRedirect: '/api/auth/error' }), apiController.authorizeUser);
router.get('/auth/error', (req, res) =>  res.send({ authorized : 'false' }));
router.get('*', function (req, res) { res.redirect('/error/notfound') });



export = router;