import nodemailer from "nodemailer";

function sendGmail({ user, password, to, subject, text }) {
  console.log(`user`);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass: password,
    },
  });

  const options = {
    from: user,
    to,
    subject,
    text,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(`err`);
      return;
    }
    console.log("Sent " + info.response);
  });
}

export default sendGmail;
