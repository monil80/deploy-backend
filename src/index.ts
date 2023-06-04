// depedencies
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import emailCOnroller from './controller/emailController';

// configuration settings
dotenv.config();
const app = express();
app.use(cors(), express.json());


app.listen(process.env.PORT, () => {
  console.log(
    `\u001b[36m${process.env.SERVICE_NAME}  ---> \u001b[33m start at port ${process.env.PORT}`
  );
});


app.on("error", (error) => {
  console.error(`\u001b[31m Failed to start server`);
  process.exit(1);
});

// cheking server
app.get("/", (req, res) => {
  res.send(
    `${process.env.SERVICE_NAME}  ---> start at port ${process.env.PORT}`
  );
});

app.use("/api/email", emailCOnroller)



