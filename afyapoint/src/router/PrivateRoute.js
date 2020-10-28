import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../AppContext";

function PrivateRoute({ children, ...rest }) {
  let [state, dispatch] = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
