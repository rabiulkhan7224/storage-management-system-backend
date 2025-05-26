"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_middleware_1 = require("./middlewares/auth.middleware");
const folder_routes_1 = __importDefault(require("./routes/folder.routes"));
const file_routes_1 = __importDefault(require("./routes/file.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
// cokie parser middleware
app.use((0, cookie_parser_1.default)());
(0, db_1.default)();
app.use('/api/auth', auth_routes_1.default);
app.use('/api/files', auth_middleware_1.authMiddleware, file_routes_1.default);
app.use('/api/folders', auth_middleware_1.authMiddleware, folder_routes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the API' });
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
// export default app;
