import "dotenv/config";
import express from "express";
import connectDB from "./connectDB.js";
import sendEmail from "./sendMail.js";
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Everything working fine." });
});

app.get("/send-email", async (req, res) => {
  const result = await sendEmail();
  console.log(result);

  res.status(200).json({ success: true, message: "Email is send." });
});

app.listen(3000, () => {
  console.log("server started successfully");
});
