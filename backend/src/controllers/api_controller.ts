import express from 'express';

const apiController = {

    callControler : (req: express.Request, res: express.Response, next: express.NextFunction) => {
        req.session.views = (req.session.views || 0) + 1
        res.send("<html><h1>Called! "+req.session.views+"</h1></html>");
    },

    recallControler : (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("<html><h1>Recalled!</h1></html>");
    },

}

export = apiController;


