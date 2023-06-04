import nodemailer from "nodemailer";
import dotenv from "dotenv";
import express from "express";
import { Request, Response } from 'express';


dotenv.config();
const router = express.Router();


const contect = async (req: Request, res: Response) => {

    try{
    var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.AURA_USER,
      pass: process.env.AURA_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.AURA_USER, // sender address
    to: process.env.AURA_USER, // list of receivers
    subject: "contect inquiry from the aura elevator", // Subject line
   
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
    } else {
      res.json({ status: true, msg: "Message Sent Successfully" });
    }
  });
  } catch (error) {
      console.error(error);
       res.json({
        status: false,
        msg: "Message not Sent Successfully",
        error: error,
      });
  }
}

const quote = async (req: Request, res: Response) => {

  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.AURA_USER,
        pass: process.env.AURA_PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.AURA_USER, // sender address
      to: process.env.AURA_USER, // list of receivers
      subject: "Quotation inquiry from the aura elevator", // Subject line

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
      } else {
        res.json({ status: true, msg: "Quotation Sent Successfully" });
      }
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: false,
      msg: "Quotation not Sent Successfully",
      error: error,
    });
  }
}
router.post('/contect', contect)
router.post('/quote', quote)






export default router;