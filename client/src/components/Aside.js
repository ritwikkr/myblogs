import React from "react";
import Wrapper from "../wrapper/AsideWrapper";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

function Aside() {
  return (
    <Wrapper>
      <div className="about-me">
        <div className="heading">
          <hr />
          <p>about me</p>
          <hr />
        </div>
        <div className="body">
          <img
            src="https://images.unsplash.com/photo-1628102491629-778571d893a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="about me"
          />
          <div className="info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium maxime tempore, accusantium illo molestias ducimus!
            </p>
          </div>
        </div>
      </div>
      <div className="follow-us">
        <div className="heading">
          <hr />
          <p>follow us</p>
          <hr />
        </div>
        <div className="body">
          <AiFillFacebook />
          <AiFillTwitterSquare />
          <FaInstagramSquare />
        </div>
      </div>
    </Wrapper>
  );
}

export default Aside;
