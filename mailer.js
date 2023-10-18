// 1. import nodemailer
const nodemailer = require("nodemailer");

// 2Configure email and send it.

async function sendMail() {
  // 1.create an email transporter.
  // SMTP (simple mail transfer protocol)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "user@gmail.com",
      pass: "ghghghghghghghgh",
    },
  });

  // 2. configure email content
  const mailOptions = {
    from: "user@gmail.com",
    to: "recievers@gmail.com",
    subject: "welcome to nodejs",
    text: "this is an email using nodemailer in node js",
  };

  // 3. send the email.
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (err) {
    console.log("Email send failed with error: " + err);
  }
}

sendMail();
