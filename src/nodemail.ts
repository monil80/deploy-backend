import nodemailer from "nodemailer";
import { TransportOptions } from 'nodemailer';

interface MailData {
name: string;
email: string;
phone: string;
message: string;
}

const sendMail1 = async (data: MailData): Promise<void> => {
try {
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
host: process.env.SMTP_HOST,
port: Number(process.env.SMTP_PORT),
secure: false, // true for 465, false for other ports
auth: {
user: process.env.SMTP_USER, // generated ethereal user
pass: process.env.SMTP_PASSWORD, // generated ethereal password
},
});


 let info = await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`, // sender address
      to: "youremail@gmail.com", // list of receivers
      subject: "Quote Request", // Subject line
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `, // html body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);
  }

  
};



const sendMail = async (data: { name: string; email: string; subject: string; message: string }): Promise<void> => {
  
   
};