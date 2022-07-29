import React, { useState } from "react";
import Wrapper from "../wrapper/WritePageWrapper";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

function WritePage() {
  const [rows] = useState(10);
  const [blogPost, setBlogPost] = useState({ title: "", content: "" });

  const { publish, isJwtExpired } = useAppContext();
  const navigate = useNavigate();

  function formSubmitHandler(e) {
    e.preventDefault();
    // publish(blogPost);
    console.log(isJwtExpired);
    if (!isJwtExpired) {
      console.log(`in jwt expired`);
    }
    // setTimeout(() => {
    //   navigate("/");
    // }, 2000);
  }
  return (
    <Wrapper>
      <div className="body">
        <form onSubmit={formSubmitHandler}>
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="content">
            <div className="title">
              <div className="icon">
                <AiOutlinePlusCircle />
              </div>

              <input
                type="text"
                placeholder="Title"
                onChange={(e) =>
                  setBlogPost({ ...blogPost, title: e.target.value })
                }
              />
            </div>
            <div className="blog">
              <textarea
                name="blog"
                id="blog"
                rows={rows}
                cols={"110"}
                placeholder="Tell your story..."
                onChange={(e) =>
                  setBlogPost({ ...blogPost, content: e.target.value })
                }
              ></textarea>
            </div>
            <div className="publish">
              <button type="submit">publish</button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default WritePage;
