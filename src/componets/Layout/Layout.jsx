import React from "react";
import { Link, NavLink, Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <Link to="/">Logo</Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/info">Info</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
