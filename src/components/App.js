import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./views/PageNotFound";
import MainPage from "./views/MainView/MainView";
import ConfigurationViewPage from "./views/ConfigurationView/ConfigurationView";
import FullScreenViewPage from "./views/FullScreenView";
import CssBaseline from "@material-ui/core/CssBaseline";
import { install } from "@material-ui/styles";

install();

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            exact
            path="/configuration/:layout"
            component={ConfigurationViewPage}
          />
          <Route
            exact
            path="/fullscreen/:layout"
            component={FullScreenViewPage}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
