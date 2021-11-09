"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const api_routes_1 = __importDefault(require("./api/api_routes"));
const error_routes_1 = __importDefault(require("./error/error_routes"));
let router = express_1.default.Router();
router.use('/api', api_routes_1.default); //Level 2 route
router.use('/error', error_routes_1.default); //Level 2 route
module.exports = router;
//# sourceMappingURL=index.js.map