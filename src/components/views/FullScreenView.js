import React from "react";
import PropTypes from "prop-types";
import ElementsGridLayout from "../ui/ElementsGridLayout";

class FullScreenView extends React.Component {
  static propTypes = {
    match: {
      params: {
        layout: PropTypes.number.isRequired
      }
    }
  };

  state = {
    rowWidth: 600
  };

  updateDimensions = e => {
    if (e.currentTarget.innerWidth) {
      const newWidth = e.currentTarget.innerWidth - 50;
      this.setState({ rowWidth: newWidth });
    }
  };
  componentDidMount = () => {
    this.setState({ rowWidth: window.innerWidth - 50 });
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  render() {
    return (
      <div className="layout-configrtion-view">
        <ElementsGridLayout
          id="conf-grid-layput"
          rowHeight={200}
          width={this.state.rowWidth}
          layoutId={parseInt(this.props.match.params.layout)}
        />
      </div>
    );
  }
}

export default FullScreenView;
