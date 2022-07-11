import React, { useEffect } from "react";
import Aside from "../components/Aside";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Wrapper from "../wrapper/HomePageWrapper";
import { useAppContext } from "../context/appContext";
import Loading from "../components/Loading";

function HomePage() {
  const { getBlogs, blogs } = useAppContext();
  useEffect(() => {
    getBlogs();
  }, []);
  if (blogs.length < 1) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <Banner />
      <div className="body" id="id">
        <div className="content">
          <div className="blogs">
            {blogs.map((blog) => (
              <Blog key={blog._id} {...blog} />
            ))}
          </div>
          <aside>
            <Aside />
          </aside>
        </div>
      </div>
    </Wrapper>
  );
}

export default HomePage;
