import React, { useEffect } from "react";
import Wrapper from "../wrapper/BlogPageWrapper";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Aside from "../components/Aside";
import Loading from "../components/Loading";
import { BsFillTrashFill } from "react-icons/bs";

function BlogPage() {
  const { getBlog, blog, deleteBlog, user } = useAppContext();
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(user._id);
  // console.log(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getBlog(id);
  }, [getBlog, id]);
  // Important
  if (blog._id !== id) {
    return <Loading />;
  }

  let { image, title, content, authId } = blog;
  // console.log(authId);

  function deleteBlogHandler() {
    deleteBlog(id);
    // setTimeout(() => {
    navigate("/");
    // }, 2000);
  }
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
        <div className="foot">
          <div className="back">
            <Link to={"/"} style={{ color: "unset", textDecoration: "unset" }}>
              <button aria-label="Go back">back</button>
            </Link>
          </div>
          {authId === user._id && (
            <div className="delete">
              <BsFillTrashFill
                aria-label="Delete Blog"
                onClick={() => deleteBlogHandler()}
              />
            </div>
          )}
        </div>
      </div>
      <Aside />
    </Wrapper>
  );
}

export default BlogPage;
