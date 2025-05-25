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
exports.logout = exports.login = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }
        const existingUser = yield User_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ error: "User already exists" });
            return;
        }
        const hashed = yield bcrypt_1.default.hash(password, 10);
        const user = yield User_1.default.create({ name, email, password: hashed });
        res.status(201).json(user);
    }
    catch (err) {
        res.status(500).json({ error: 'Signup failed' });
    }
});
exports.signup = signup;
// how to cookieparse ,jwt ,npm install
// npm install cookie-parser jsonwebtoken
// @types/jsonwebtoken @types/cookie-parser    
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.default.findOne({ email });
    if (!user ||
        !user.password ||
        !(yield bcrypt_1.default.compare(password, user.password))) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('token', token).json({ message: 'Logged in', token });
});
exports.login = login;
const logout = (req, res) => {
    res.clearCookie('token').json({ message: 'Logged out' });
};
exports.logout = logout;
