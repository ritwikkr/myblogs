import express from "express";
import {
  forgotPassword,
  loginUser,
  registerUser,
  removeAllRecords,
  resetPassword,
} from "../controller/authController.js";
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/forgotPassword").post(forgotPassword);
router.route("/register").post(registerUser);
router.route("/resetPassword").post(resetPassword);
router.route("/removeAll").get(removeAllRecords);

export default router;
