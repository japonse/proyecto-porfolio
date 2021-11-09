"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
router.get('/notfound', (req, res) => {
    res.send("<html><h1>NOTFOUND 404</h1></html>");
});
router.get('/dbconnection', (req, res) => {
    res.send("<html><h1>Unable to connect to the database</h1></html>");
});
module.exports = router;
//# sourceMappingURL=error_routes.js.map