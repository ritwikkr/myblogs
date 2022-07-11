import Auth from "../models/authSchema.js";

async function registerUser(req, res) {
  try {
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

export { registerUser, removeAllRecords };
