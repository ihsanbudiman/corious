import { Router } from "preact-router";

import { Fragment } from "preact";
import Layout from "./layouts/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/login";
import RouterHandler from "./components/router";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <Fragment>
      <RecoilRoot>
        <RouterHandler />
      </RecoilRoot>
    </Fragment>
  );
}
