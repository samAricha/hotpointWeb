import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav_logo"
        src={"./images/netflix-transparent.png"}
        alt="Netflix Logo"
      />
      <img className="avatar" src={"./images/avatar.png"} alt="avatar" />
    </div>
  );
};

export default Nav;
