import React from "react";
import "../styles/main.css";
import logoimg from "../assets/logo.png";

function NavBar() {
  return (
    <header className=" rounded-md mx-3 flex items-center justify-center bg-gray-600 shadow-2xl bg-opacity-50">
      <div className=" ">
        <img src={logoimg} alt="" className=" w-auto h-32" />
      </div>
    </header>
  );
}

export default NavBar;
