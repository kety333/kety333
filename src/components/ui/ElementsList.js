import React, { Component } from "react";
import elementService from "../../services/elementService";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  elementToSelect: {
    borderColor: "blue",
    borderStyle: "solid",
    height: 150,
    width: "100%",
    maxWidth: 180,
    textAlign: "center",
    marginTop: 20,
    paddingTop: 65
  },
  elementList: {
    listStyleType: "none",
    margin: 0,
    padding: 0
  }
});
class ElementsList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

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
      <ul className={this.props.classes.elementList}>
        {this.state.elemnts.map(element => (
          <li key={element.id.toString()}>
            <div
              id={"item-" + element.id}
              draggable="true"
              onDragStart={this.dragStart({ elemtntId: "item-" + element.id })}
              className={this.props.classes.elementToSelect}
            >
              {element.name}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default withStyles(styles)(ElementsList);
