import React from "react";
import Wrapper from "../wrapper/BlogWrapper";
import { Link } from "react-router-dom";

function Blog({ title, image, content, _id }) {
  return (
    <Wrapper>
      <Link
        to={`/blog/${_id}`}
        style={{ textDecoration: "unset", color: "unset" }}
      >
        <div className="body">
          <div className="img">
            <img src={image} alt={title + "image"} />
          </div>
          <div className="content">
            <div className="heading">
              <h2>{title}</h2>
            </div>
            <div className="time">
              <p>1 hour ago</p>
            </div>
            <div className="desc">
              <p>{content.slice(0, 150)}...</p>
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

export default Blog;
