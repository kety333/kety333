import React from "react";
import GridLayout from "react-grid-layout";
import PropTypes from "prop-types";
import layoutService from "../../services/layoutService";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as layoutActions from "../../redux/actions/layotActions";

class ElementsGridLayout extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired,
    layoutId: PropTypes.number.isRequired,
    layoutsList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  state = {
    layout: []
  };

  componentDidMount() {
    const layoutById = layoutService.getLayoutById(
      this.props.layoutsList,
      this.props.layoutId
    );
    const layout = layoutById !== undefined ? layoutById.layout : [];
    this.setState({
      layout: layout
    });
  }

  dragOver = event => {
    event.preventDefault();
    event.dataTransfer.setData("targetContent", event.target.id);
  };

  onDrop = event => {
    event.preventDefault();

    const data = event.dataTransfer.getData("dragContent");
    const targetLayoutElementId = event.target.id;
    this.addDragedItem(data, targetLayoutElementId);
    //TODO - update  redux storeand  state.
    //  this.props.actions.updateLayout(this.state.layouts);
    // this.setState(state => {
    //    }
  };

  addDragedItem = (data, targetLayoutElementId) => {
    let div = document.createElement("div");
    div.classList.add("element-to-select");
    div.style.marginLeft = "100px";
    let textnode = document.createTextNode(data);
    div.appendChild(textnode);
    const targetNode = document.getElementById(targetLayoutElementId);
    //   targetNode.style.paddingLeft = "40%";
    while (targetNode.firstChild) {
      targetNode.removeChild(targetNode.firstChild);
    }
    targetNode.appendChild(div);
  };

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
          <div
            key={item.i}
            id={item.id}
            onDrop={e => this.onDrop(e, "complete")}
            onDragOver={this.dragOver}
          >
            {item.value ? (
              <div className="element-to-select">item.value</div>
            ) : (
              item.i
            )}
          </div>
        ))}
      </GridLayout>
    );
  }
}

function mapActionsToProp(dispatch) {
  return {
    actions: bindActionCreators(layoutActions, dispatch)
  };
}

function mapStateToProps(storageState) {
  return {
    layoutsList: storageState.layouts
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProp
)(ElementsGridLayout);
