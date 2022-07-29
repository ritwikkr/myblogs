import express from "express";
import {
  deleteBlog,
  getBlog,
  getBlogs,
  postBlogs,
  publishArticle,
} from "../controller/blogsController.js";
const router = express.Router();

import { authentication } from "../middleware/authentication.js";

router.route("/").get(getBlogs).post(authentication, postBlogs);
router.route("/:id").get(getBlog).delete(deleteBlog);
router.route("/publish").post(authentication, publishArticle);

export default router;
