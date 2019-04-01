import React from "react";
import GridLayout from "react-grid-layout";
import PropTypes from "prop-types";

class ElementsGridLayout extends React.Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
    rowHeight: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    //this.state.layout = props.layout;
  }

  state = {
    layout: []
  };

  componentDidMount() {
    const layoutTemp = [
      { i: "a", x: 0, y: 0, w: 2, h: 1, static: true },
      { i: "b", x: 0, y: 1, w: 1, h: 1, static: true },
      { i: "c", x: 1, y: 1, w: 1, h: 1, static: true },
      { i: "d", x: 0, y: 2, w: 2, h: 1, static: true },
      { i: "e", x: 0, y: 3, w: 2, h: 1, static: true }
    ];
    this.setState({
      layout: layoutTemp
    });
  }

  drag(ev) {
    debugger;
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    debugger;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  render() {
    return (
      <GridLayout
        className="layout elements-grid-layout"
        layout={this.state.layout}
        cols={2}
        autoSize={true}
        rowHeight={this.props.rowHeight}
        width={this.props.width}
      >
        {this.state.layout.map(item => (
          <div key={item.i} onDrop="drop(event)" onDragOver="allowDrop(event)">
            {item.i}
          </div>
        ))}
      </GridLayout>
    );
  }
}

export default ElementsGridLayout;
