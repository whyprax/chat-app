import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">WeChat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
          alt=""
        />
        <span>John</span>
        <button>LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
