import express from 'express';
import apiRouter from "./api/api_routes";
import errorRouter from "./error/error_routes";


let router: express.Router = express.Router();

router.use('/api', apiRouter); //Level 2 route
router.use('/error', errorRouter); //Level 2 route

export = router;
