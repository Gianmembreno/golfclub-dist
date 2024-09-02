import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import "./Header.css";

function Header({ selectedComponent, handleNavigate, handleOpenPopup }) {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (animationClass) {
      const timer = setTimeout(() => setAnimationClass(""), 300);
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  const handleNavigation = (direction) => {
    setAnimationClass(
      direction === "next" ? "slide-in-right" : "slide-in-left"
    );
    handleNavigate(direction);
  };

  return (
    <header className="header">
      <div className="section-title">
        <button
          onClick={() => handleNavigation("prev")}
          className="arrow-button left"
        >
          <IoMdArrowDropleft />
        </button>
        <h1 className={`title ${animationClass}`}>
          {selectedComponent
            ? selectedComponent.replace(/([A-Z])/g, " $1").trim()
            : "Welcome"}
        </h1>
        <button
          onClick={() => handleNavigation("next")}
          className="arrow-button right"
        >
          <IoMdArrowDropright />
        </button>
      </div>
      <button className="login-button" onClick={handleOpenPopup}>
        <FaUserCircle size={32} />
      </button>
    </header>
  );
}

export default Header;
