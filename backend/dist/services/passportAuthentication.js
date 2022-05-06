"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const LocalStrategy = require("passport-local").Strategy;
//which data of the user object should be stored in the session
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
//the key of the user object
passport_1.default.deserializeUser((id, done) => {
    const user = { id: 1, username: 'admin' };
    done(null, user);
});
passport_1.default.use(new LocalStrategy(function (username, password, done) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Entered local strategy " + username + " " + password);
        const user = { id: 1, username: 'admin', password: password };
        if (password == process.env.ADMIN_PASSWORD && username == 'admin') {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
}));
//# sourceMappingURL=passportAuthentication.js.map