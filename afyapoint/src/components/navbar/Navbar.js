import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { AppContext } from "../../AppContext";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [account, setAccount] = useState(null);
  let [state, dispatch] = useContext(AppContext);
  const handleLogout = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  useEffect(() => {
    let mounted = true;

    if (account) {
      return;
    }

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      return;
    }

    axios
      .get("users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (mounted) {
          setAccount(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return function cleanup() {
      mounted = false;
    };
  }, [account]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between position-fixed w-100 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link">
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              {state.isAuthenticated ? (
                <>
                  <span className="p-2">
                    Howday, {account ? account.firstName : null}
                  </span>
                  <button
                    type="button"
                    className="btn btn-outline-info my-2 my-sm-0"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  to="/signin"
                  className="btn btn-outline-info my-2 my-sm-0"
                  type="button"
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
