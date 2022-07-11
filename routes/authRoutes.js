import express from "express";
import {
  registerUser,
  removeAllRecords,
} from "../controller/authController.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/removeAll").get(removeAllRecords);

export default router;
