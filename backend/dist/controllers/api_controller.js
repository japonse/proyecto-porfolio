"use strict";
const apiController = {
    call: (req, res, next) => {
        req.session.views = (req.session.views || 0) + 1;
        res.send({ hola: "adios" });
        //res.send("<html><h1>Called!!! "+req.session.views+"</h1></html>");
    },
    recall: (req, res, next) => {
        res.send("<html><h1>Recalled!</h1></html>");
    },
};
module.exports = apiController;
//# sourceMappingURL=api_controller.js.map