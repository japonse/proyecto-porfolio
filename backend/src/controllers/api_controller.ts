import express from 'express';

const apiController = {
    authorizeUser: (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send( { authorized : 'true' } );
    },

    login :(req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send({hola:"adios"});
    },

    call : (req: express.Request, res: express.Response, next: express.NextFunction) => {
        req.session.views = (req.session.views || 0) + 1;
        res.send({hola:"adios"});
    },

    recall : (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("<html><h1>Recalled!</h1></html>");
    },

}

export = apiController;


