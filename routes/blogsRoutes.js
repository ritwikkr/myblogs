import express from "express";
import {
  getBlog,
  getBlogs,
  postBlogs,
  publishArticle,
} from "../controller/blogsController.js";
const router = express.Router();

import { authentication } from "../middleware/authentication.js";

router.route("/").get(getBlogs).post(authentication, postBlogs);
router.route("/:id").get(getBlog);
router.route("/publish").post(authentication, publishArticle);

export default router;
