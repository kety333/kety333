import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import App from "./components/App";
import "./index.css";
// import configureStore from "./redux/configureStore";
// import { Provider as ReduxProvider } from "react-redux";
// import LayoutService from "./services/layoutService";

import layoutStore from "./redux/store";
import { Provider } from "react-redux";

render(
  <Provider store={layoutStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
