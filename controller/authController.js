import Auth from "../models/authSchema.js";
// import sendGmail from "../utils/nodemailer.js";
import nodemailer from "nodemailer";

async function loginUser(req, res) {
  try {
    const response = await Auth.findOne({ email: req.body.email });
    if (!response) {
      return res
        .status(401)
        .json("You Are Not Registered..... Please register yourself");
    }
    const isPasswordCorrect = await response.comparePassword(req.body.password);
    if (!isPasswordCorrect) {
      return res.status(401).json("Invalid Password");
    }
    const token = response.createJWT();
    response.password = undefined;
    res.json({ response, token });
  } catch (error) {
    console.log(error);
  }
}

async function registerUser(req, res) {
  try {
    const isPresent = await Auth.findOne({ email: req.body.email });
    if (isPresent) {
      return res.status(401).json("Email already in use. Please login!");
    }
    const response = await Auth.create(req.body);
    response.password = undefined;
    const token = response.createJWT();
    res.json({ response, token });
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
}

async function forgotPassword(req, res) {
  try {
    const isPresent = await Auth.findOne({ email: req.body.email });
    if (!isPresent) {
      return res.status(401).json("Email Not Present");
    }
    const link = `http://localhost:3000/resetPassword/${isPresent._id}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ritwikkumarrishu@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const options = {
      from: "ritwikkumarrishu@gmail.com",
      to: isPresent.email,
      subject: "Reset password link",
      text: link,
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(`err`);
        return;
      }
      console.log("Sent " + info.response);
    });
    // sendGmail({
    //   user: "ritwikkumarrishu@gmail.com",
    //   password: process.env.GMAIL_PASSWORD,
    //   to: isUserPresent.email,
    //   subject: "Password Reset Link",
    //   text: `Password reset link sent to your email. Kindly go there and change your password\n${link}`,
    // });
    res.json(isPresent);
  } catch (error) {
    res.status(401).json(error);
  }
}

async function resetPassword(req, res) {
  try {
    // console.log(req.body);
    const pass = req.body.password.password;
    const conPass = req.body.password.confirmPassword;
    if (pass !== conPass) {
      return res.status(401).json("Both passwords does'nt match");
    }
    console.log(req.body);
    const user = await Auth.findById(req.body.id);
    if (!user) {
      return res.status(401).json("No User Present");
    }
    const updatePassword = await Auth.findByIdAndUpdate(req.body.id, {
      password: pass,
    });
    console.log("Updated Password: ", updatePassword);
    console.log(user);
    // const response = await Auth.findOne()
  } catch (error) {
    res.status(401).json(error);
  }
}

async function removeAllRecords(req, res) {
  try {
    const response = await Auth.remove();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

export {
  registerUser,
  removeAllRecords,
  loginUser,
  forgotPassword,
  resetPassword,
};
