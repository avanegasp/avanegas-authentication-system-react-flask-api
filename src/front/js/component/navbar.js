import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const handleLogout = () => {
    actions.logout();
    navigate("/");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
