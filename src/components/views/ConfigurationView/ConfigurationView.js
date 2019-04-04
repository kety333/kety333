import React from "react";
import ConfGrid from "./ConfGrid";
import PropTypes from "prop-types";

export default function ConfigurationView(props) {
  return (
    <div>
      <ConfGrid
        className="layout-configrtion-view"
        layoutId={parseInt(props.match.params.layout)}
      />
    </div>
  );
}

ConfigurationView.propTypes = {
  match: {
    params: {
      layout: PropTypes.number.isRequired
    }
  }
};
