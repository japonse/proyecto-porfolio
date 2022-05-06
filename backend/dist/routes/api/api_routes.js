"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const api_controller_1 = __importDefault(require("../../controllers/api_controller"));
const passport_1 = __importDefault(require("passport"));
let router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send("<html><h1>I'm an API!</h1></html>");
});
router.get('/login', api_controller_1.default.login);
router.get('/call', api_controller_1.default.call);
router.get('/recall', api_controller_1.default.recall);
router.post('/auth', passport_1.default.authenticate('local', { failureRedirect: '/api/auth/error' }), api_controller_1.default.authorizeUser);
router.get('/auth/error', (req, res) => res.send({ authorized: 'false' }));
router.get('*', function (req, res) { res.redirect('/error/notfound'); });
module.exports = router;
//# sourceMappingURL=api_routes.js.map