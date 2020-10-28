import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import("./components/home/Home"));
const Register = lazy(() => import("./components/register/Register"));
const WorkerRegister = lazy(() =>
  import("./components/register/WorkerRegister")
);
const Login = lazy(() => import("./components/login/Login"));
const Team = lazy(() => import("./components/team/Team"));
const Service = lazy(() => import("./components/services/Services"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));
const Layout = lazy(() => import("./components/layout/Layout"));

function Loader() {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact={true} path="/">
          <Layout>
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          </Layout>
        </Route>
        <Route path="/signin">
          <Layout>
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          </Layout>
        </Route>
        <Route path="/signup">
          <Layout>
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          </Layout>
        </Route>
        <Route path="/service">
          <Layout>
            <Suspense fallback={<Loader />}>
              <Service />
            </Suspense>
          </Layout>
        </Route>
        <Route path="/team">
          <Layout>
            <Suspense fallback={<Loader />}>
              <Team />
            </Suspense>
          </Layout>
        </Route>
        <Route path="/worker-signup">
          <Layout>
            <Suspense fallback={<Loader />}>
              <WorkerRegister />
            </Suspense>
          </Layout>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
