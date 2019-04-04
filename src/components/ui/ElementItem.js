import React, { Component } from "react";
import elementService from "../../services/elementService";

export default class ElementItem extends Component {
  componentDidMount() {
    const items = elementService.getAllElements();
    this.setState({
      elemnts: items
    });
  }

  dragStart = data => event => {
    let fromElement = data.name;
    event.dataTransfer.setData("dragContent", fromElement);
  };

  render() {
    return (
      <ul className="element-list">
        {this.state.elemnts.map(element => (
          <li key={element.id.toString()} id={"item-" + element.id}>
            <div
              draggable="true"
              onDragStart={this.dragStart({ name: "item-" + element.name })}
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
