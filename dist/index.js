"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// depedencies
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const emailController_1 = __importDefault(require("./controller/emailController"));
// configuration settings
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(), express_1.default.json());
app.listen(process.env.PORT, () => {
    console.log(`\u001b[36m${process.env.SERVICE_NAME}  ---> \u001b[33m start at port ${process.env.PORT}`);
});
app.on("error", (error) => {
    console.error(`\u001b[31m Failed to start server`);
    process.exit(1);
});
// cheking server
app.get("/", (req, res) => {
    res.send(`${process.env.SERVICE_NAME}  ---> start at port ${process.env.PORT}`);
});
app.use("/api/email", emailController_1.default);
