import blogs from "../models/blogsSchema.js";
import Auth from "../models/authSchema.js";
import axios from "axios";

async function getBlogs(req, res) {
  try {
    const response = await blogs.find();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

async function postBlogs(req, res) {
  try {
    const response = await blogs.create(req.body);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

async function getBlog(req, res) {
  try {
    const response = await blogs.findById(req.params.id);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
}

async function publishArticle(req, res) {
  try {
    // console.log(req.user);
    const { title, content } = req.body;
    const user = await Auth.findById(req.user.userId);
    const author = user.username;
    const uri = `http://api.unsplash.com/search/photos?query=london&client_id=lMfaTHxdzYocD-4JnfViRZCYfVZoJUXxII3glWihFGU`;
    const result = await axios.get(uri);
    const randNum = Math.floor(Math.random() * 10);
    const image = result.data.results[randNum].urls.full;
    const response = await blogs.create({
      title,
      content,
      author,
      image,
      authId: req.user.userId,
    });
    res.json(response);
  } catch (error) {
    res.status(401).json(error);
  }
}

async function deleteBlog(req, res) {
  try {
    const { id } = req.params;
    const isPresent = await blogs.findById(id);
    if (!isPresent) {
      return res.status(401).json("No such blog present");
    }
    const action = await blogs.findByIdAndDelete(id);
    res.json(action);
  } catch (error) {
    res.status(401).json(error);
  }
}

export { getBlogs, postBlogs, getBlog, publishArticle, deleteBlog };
