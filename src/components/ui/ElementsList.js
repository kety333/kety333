import React, { Component } from "react";
import elementService from "../../services/elementService";

export default class ElementsList extends Component {
  state = {
    elemnts: []
  };

  componentDidMount() {
    const items = elementService.getAllElements();
    this.setState({
      elemnts: items
    });
  }

  drag(ev) {
    debugger;
    ev.dataTransfer.setData("text", ev.target.id);
  }

  render() {
    return (
      <ul className="element-list">
        {this.state.elemnts.map(element => (
          <li key={element.id.toString()}>
            <div
              draggable="true"
              onDragStart="drag(event)"
              className="element-to-select"
            >
              {element.name}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
