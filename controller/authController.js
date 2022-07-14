import Auth from "../models/authSchema.js";

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

async function removeAllRecords(req, res) {
  try {
    const response = await Auth.remove();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

export { registerUser, removeAllRecords, loginUser };
