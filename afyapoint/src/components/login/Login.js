// @flow

import React, { useState, useContext } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import { login } from "./service";
import { AppContext } from "../../AppContext";
import { validationError } from "../../error";
export default function SignIn() {
  const [state, dispatch] = useContext(AppContext);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({});
  const history = useHistory();
  const location = useLocation();

  if (state.isAuthenticated) return <Redirect to={{ pathname: "/" }} />;
  const { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(identifier, password);

      dispatch({
        type: "SIGN_IN",
        payload: {
          token: data.token,
        },
      });

      history.replace(from);
    } catch (err) {
      console.log(err);
      setValidation(validationError(err));
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid bg">
        <div className="row">
          <div className="form-wrapper">
            <div className="form-container">
              <div className="form-group">
                {validation.identifier ? (
                  <div className="alert alert-danger" role="alert">
                    {validation.identifier}
                  </div>
                ) : null}
                {validation.password ? (
                  <div className="alert alert-danger" role="alert">
                    {validation.password}
                  </div>
                ) : null}

                <input
                  className="form-control"
                  type="text"
                  name="identidier"
                  onChange={(e) => {
                    const { value } = e.target;
                    setIdentifier(value);
                  }}
                  placeholder="Email or Phone"
                  value={identifier}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={(e) => {
                    const { value } = e.target;
                    setPassword(value);
                  }}
                  placeholder="Password"
                  value={password}
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="btn btn-info btn-block"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
