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
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMail1 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer_1.default.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD, // generated ethereal password
            },
        });
        let info = yield transporter.sendMail({
            from: `"${data.name}" <${data.email}>`,
            to: "youremail@gmail.com",
            subject: "Quote Request",
            html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `, // html body
        });
        console.log("Message sent: %s", info.messageId);
    }
    catch (error) {
        console.error(error);
    }
});
const sendMail = (data) => __awaiter(void 0, void 0, void 0, function* () {
});
