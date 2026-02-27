// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// async function sendEmail() {
//   const response = await resend.emails.send({
//     from: "Acme <onboarding@resend.dev>",
//     to: "muddasirbutt3@gmail.com",
//     subject: "Hello from my project",
//     html: "<strong>Email works!</strong>",
//   });

//   return response;
// }
// export default sendEmail;
// import {MailtrapTransport} from 'mailtrap'

// const TOKEN = process.env.MAIL_TRAP_API_KEY;

// const transport = Nodemailer.createTransport(
//   MailtrapTransport({
//     token: TOKEN,
//   }),
// );

// const sender = {
//   address: "hello@demomailtrap.co",
//   name: "Mailtrap Test",
// };
// const recipients = ["muddasirbutt3@gmail.com"];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

async function sendMail() {
  return await transporter.sendMail({
    from: "My App <muddasirbutt3@gmail.com>",
    to: ["muddasirbutt4fun@gmail.com",'khizrabutt75@gmail.com'],
    subject: "Welcome",
    text: "Thanks for signing up!",
  });
}

export default sendMail;
