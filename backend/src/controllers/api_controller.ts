import express from 'express';

const apiController = {

    call : (req: express.Request, res: express.Response, next: express.NextFunction) => {
        req.session.views = (req.session.views || 0) + 1;
        res.send({hola:"adios"});
        //res.send("<html><h1>Called!!! "+req.session.views+"</h1></html>");
    },

    recall : (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("<html><h1>Recalled!</h1></html>");
    },

}

export = apiController;


