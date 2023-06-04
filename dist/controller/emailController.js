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
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const router = express_1.default.Router();
const contect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.AURA_USER,
                pass: process.env.AURA_PASSWORD,
            },
        });
        var mailOptions = {
            from: process.env.AURA_USER,
            to: process.env.AURA_USER,
            subject: "contect inquiry from the aura elevator",
            html: `
     <style>
  .container {
    padding: 10px;
    border: 2px solid #ccc;
    font-family: Arial, sans-serif;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 24px;
    margin: 20px 0 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 16px;
    margin-bottom: 5px;
  }

  label {
    display: block;
    font-weight: bold;
  }
</style>

<div class="container">
  <p>You have a new contact inquiry from the Aura Elevator website:</p>
  <h3>Details</h3>
  <ul>
    <li>
      <label>Name:</label>
      ${req.body.name}
    </li>
    <li>
      <label>Email:</label>
      ${req.body.email}
    </li>
    <li>
      <label>Subject:</label>
      ${req.body.subject}
    </li>
    <li>
      <label>Message:</label>
      ${req.body.message}
    </li>
  </ul>
</div>
      `,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json({
                    status: false,
                    msg: "Message not Sent Successfully",
                    error: error,
                });
            }
            else {
                res.json({ status: true, msg: "Message Sent Successfully" });
            }
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            status: false,
            msg: "Message not Sent Successfully",
            error: error,
        });
    }
});
const quote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.AURA_USER,
                pass: process.env.AURA_PASSWORD,
            },
        });
        var mailOptions = {
            from: process.env.AURA_USER,
            to: process.env.AURA_USER,
            subject: "Quotation inquiry from the aura elevator",
            html: `
     <style>
  .container {
    padding: 10px;
    border: 2px solid #ccc;
    font-family: Arial, sans-serif;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 24px;
    margin: 20px 0 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 16px;
    margin-bottom: 5px;
  }

  label {
    display: block;
    font-weight: bold;
  }
</style>

<div class="container">
  <p>You have a new Quotation inquiry from the Aura Elevator website:</p>
  <h3>Details</h3>
  <ul>
    <li>
      <label>Name:</label>
      ${req.body.name}
    </li>
    <li>
      <label>Email:</label>
      ${req.body.email}
    </li>
    <li>
      <label>Phone:</label>
      ${req.body.phone}
    </li>
    <li>
      <label>Message:</label>
      ${req.body.message}
    </li>
  </ul>
</div>
      `,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json({
                    status: false,
                    msg: "Quotation  not Sent Successfully",
                    error: error,
                });
            }
            else {
                res.json({ status: true, msg: "Quotation Sent Successfully" });
            }
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            status: false,
            msg: "Quotation not Sent Successfully",
            error: error,
        });
    }
});
router.post('/contect', contect);
router.post('/quote', quote);
exports.default = router;
