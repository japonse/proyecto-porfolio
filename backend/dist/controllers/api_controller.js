"use strict";
const apiController = {
    authorizeUser: (req, res, next) => {
        res.send({ authorized: 'true' });
    },
    login: (req, res, next) => {
        res.send({ hola: "adios" });
    },
    call: (req, res, next) => {
        req.session.views = (req.session.views || 0) + 1;
        res.send({ hola: "adios" });
    },
    recall: (req, res, next) => {
        res.send("<html><h1>Recalled!</h1></html>");
    },
};
module.exports = apiController;
//# sourceMappingURL=api_controller.js.map