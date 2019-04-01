import React from "react";
import { Link } from "react-router-dom";
import LayoutsGrid from "../../ui/LayoutsGrid";
const MainPage = () => (
  <div className="jumbotron">
    <h1 className="main-view-title">Layout Screen</h1>
    <div className="main-view-layouts-grid">
      <LayoutsGrid />
    </div>

    <Link to="configuration" className="btn btn-primary btn-lg">
      Go to Configuration View
    </Link>
  </div>
);

export default MainPage;
