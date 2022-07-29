import React from "react";
import Wrapper from "../wrapper/HeaderWrapper";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

function Header() {
  const { user, logoutUser } = useAppContext();
  return (
    <Wrapper>
      <div className="skip">
        <a href="#id">Skip To Main Content</a>
      </div>
      <div className="body">
        <div className="icons">
          <div className="icon" role={"button"}>
            <a
              href="https://www.facebook.com/"
              style={{ color: "unset" }}
              target="_blank"
              rel="noreferrer"
              aria-label="facebook"
            >
              <AiFillFacebook />
            </a>
          </div>
          <div className="icon" role={"button"}>
            <a
              href="https://twitter.com/"
              style={{ color: "unset" }}
              target="_blank"
              rel="noreferrer"
              aria-label="twitter"
            >
              <AiFillTwitterSquare />
            </a>
          </div>
          <div className="icon" role={"button"}>
            <a
              href="https://www.instagram.com/"
              style={{ color: "unset" }}
              target="_blank"
              rel="noreferrer"
              aria-label="instagram"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>
        <nav>
          <Link to={"/"} style={{ textDecoration: "unset", color: "unset" }}>
            <p>home</p>
          </Link>
          {/* <Link
            to={"/about"}
            style={{ textDecoration: "unset", color: "unset" }}
          >
            <p>about</p>
          </Link> */}
          {user && (
            <Link
              to={"/write"}
              style={{ textDecoration: "unset", color: "unset" }}
            >
              <p>write</p>
            </Link>
          )}
          {user ? (
            <p onClick={() => logoutUser()} focus="true">
              logout
            </p>
          ) : (
            <Link
              to={"/auth"}
              style={{ textDecoration: "unset", color: "unset" }}
            >
              <p>Sign in</p>
            </Link>
          )}
        </nav>
        {user && (
          <div className="profile">
            <button>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="profile"
              />
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Header;
