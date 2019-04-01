import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import MainPage from "./views/MainView/MainView";
import ConfigurationViewPage from "./views/ConfigurationView/ConfigurationView";
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
          <Route path="/configuration" component={ConfigurationViewPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
