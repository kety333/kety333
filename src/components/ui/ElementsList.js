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

  dragStart = data => event => {
    let fromElement = data.elemtntId;
    event.dataTransfer.setData("dragContent", fromElement);
  };

  render() {
    return (
      <ul className="element-list">
        {this.state.elemnts.map(element => (
          <li key={element.id.toString()}>
            <div
              id={"item-" + element.id}
              draggable="true"
              onDragStart={this.dragStart({ elemtntId: "item-" + element.id })}
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
