import React, { useEffect } from "react";
import Wrapper from "../wrapper/BlogPageWrapper";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Aside from "../components/Aside";
import Loading from "../components/Loading";

function BlogPage() {
  const { getBlog, blog } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    getBlog(id);
  }, []);
  // benchmark
  if (blog._id !== id) {
    return <Loading />;
  }

  let { image, title, content } = blog;
  return (
    <Wrapper>
      <div className="body">
        <div className="banner">
          <img src={image} alt={title + "image"} />
        </div>
        <div className="content">
          <div className="heading">
            <h2>{title}</h2>
          </div>
          <div className="details">
            <p>Author: {blog.author || "Anonymous"}</p>
            <p>1 day ago</p>
          </div>
          <div className="blog">
            <span>{content.slice(0, 1)}</span>
            {content.substring(1)}
          </div>
        </div>
        <div className="back">
          <Link to={"/"} style={{ color: "unset", textDecoration: "unset" }}>
            <button aria-label="Go back">back</button>
          </Link>
        </div>
      </div>
      <Aside />
    </Wrapper>
  );
}

export default BlogPage;
