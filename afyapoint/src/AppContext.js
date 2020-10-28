// @flow

import React, { createContext, useReducer } from "react";
import jwt_decode from "jwt-decode";

export const AppContext = createContext();

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      localStorage.setItem("jwtToken", action.payload.token);
      return { ...state, isAuthenticated: true };
    }
    case "SIGN_OUT": {
      localStorage.removeItem("jwtToken");
      return { ...state, isAuthenticated: false };
    }
    default:
      return state;
  }
};

const isValidToken = () => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    // JWT decode & check token validity & expiration.
    const decoded = jwt_decode(token);
    //check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp > currentTime) return true;
    return false;
  }
  return false;
};

export function AppStateProvider({ children }) {
  let initialState = { isAuthenticated: isValidToken() };
  const value = useReducer(appStateReducer, initialState);
  return (
    <div className="app">
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
}
