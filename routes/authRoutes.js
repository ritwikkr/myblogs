import express from "express";
import {
  loginUser,
  registerUser,
  removeAllRecords,
} from "../controller/authController.js";
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/removeAll").get(removeAllRecords);

export default router;
