// @flow

import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./Login.css";
import { create } from "./service";
import { AppContext } from "../../AppContext";
import { validationError } from "../../error";
const role = "DOCTOR";
export default function WorkerRegister() {
  const [state] = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({});
  const history = useHistory();

  if (state.isAuthenticated) return <Redirect to={{ pathname: "/" }} />;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await create(firstName, lastName, email, phone, password, role);

      history.replace("signin");
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
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  onChange={(e) => {
                    const { value } = e.target;
                    setFirstName(value);
                  }}
                  placeholder="First Name"
                  value={firstName}
                />
                {validation.firstName ? (
                  <div className="alert alert-danger" role="alert">
                    {validation.firstName}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  onChange={(e) => {
                    const { value } = e.target;
                    setLastName(value);
                  }}
                  placeholder="Last Name"
                  value={lastName}
                />
                {validation.lastName ? (
                  <div className="alert alert-danger" role="alert">
                    {validation.lastName}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={(e) => {
                    const { value } = e.target;
                    setEmail(value);
                  }}
                  placeholder="Email Address"
                  value={email}
                />
                {validation.email ? (
                  <div className="alert alert-danger" role="alert">
                    {validation.email}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  onChange={(e) => {
                    const { value } = e.target;
                    setPhone(value);
                  }}
                  placeholder="Phone Number"
                  value={phone}
                />
                {validation.phone ? (
                  <div className="alert alert-danger" role="alert">
                    {validation.phone}
                  </div>
                ) : null}
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
                {validation.password ? (
                  <div className="alert alert-danger" role="alert">
                    {validation.password}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="btn btn-info btn-block"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
