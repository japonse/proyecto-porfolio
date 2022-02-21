"use strict";
const apiController = {
    callControler: (req, res, next) => {
        req.session.views = (req.session.views || 0) + 1;
        res.send("<html><h1>Called! " + req.session.views + "</h1></html>");
    },
    recallControler: (req, res, next) => {
        res.send("<html><h1>Recalled!</h1></html>");
    },
};
module.exports = apiController;
//# sourceMappingURL=api_controller.js.map