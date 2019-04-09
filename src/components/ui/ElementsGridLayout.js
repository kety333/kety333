import React from "react";
import GridLayout from "react-grid-layout";
import PropTypes from "prop-types";
import layoutService from "../../services/layoutService";
import { connect } from "react-redux";
import { updateLayout } from "../../redux/actions/layout-actions";

class ElementsGridLayout extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired,
    layoutId: PropTypes.number.isRequired,
    layoutsList: PropTypes.object.isRequired,
    updateLayoutFromProps: PropTypes.func.isRequired
  };

  state = {
    layoutData: []
  };

  componentDidMount() {
    const layoutById = layoutService.getLayoutById(
      this.props.layoutsList.layouts,
      this.props.layoutId
    );
    const layout = layoutById !== undefined ? layoutById.layout : [];
    this.setState({
      layoutData: layout
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

    this.props.updateLayoutFromProps({
      layoutId: this.props.layoutId - 1,
      targetItemId:
        parseInt(
          targetLayoutElementId.replace(this.props.layoutId + "__", "")
        ) - 1,
      dreggetItemId: data
    });
    this.setState(state => {
      const layoutData = state.layoutData.map(item => {
        let itemId = this.props.layoutId + "__" + item.id;
        if (itemId === targetLayoutElementId) {
          item.draggedValue = data;
        }
        return item;
      });
      return {
        layoutData
      };
    });
  };

  addDragedItem = (data, targetLayoutElementId) => {
    const draggedElm = document.getElementById(data);
    if (draggedElm !== null) {
      //In config View
      let cloneItem = draggedElm.cloneNode(true);
      cloneItem.id = data + "dragged";
      const targetNode = document.getElementById(targetLayoutElementId);
      if (targetNode !== null) {
        while (targetNode.firstChild) {
          targetNode.removeChild(targetNode.firstChild);
        }
        cloneItem.setAttribute("style", "margin-left: 20%;");
        targetNode.appendChild(cloneItem);
      } else {
        return data;
      }
    } else {
      //In Main view
      return data;
    }
  };

  render() {
    return (
      <GridLayout
        className="layout elements-grid-layout"
        layout={this.state.layoutData}
        cols={2}
        autoSize={true}
        rowHeight={this.props.rowHeight}
        width={this.props.width}
      >
        {this.state.layoutData.length > 0 ? (
          this.state.layoutData.map(item => (
            <div
              key={item.i}
              id={this.props.layoutId + "__" + item.id}
              onDrop={e => this.onDrop(e, "complete")}
              onDragOver={this.dragOver}
            >
              {item.draggedValue !== "none"
                ? this.addDragedItem(
                    item.draggedValue,
                    this.props.layoutId + "__" + item.id
                  )
                : item.i}
            </div>
          ))
        ) : (
          <div>this.props.layoutId</div>
        )}
      </GridLayout>
    );
  }
}

function mapActionsToProp(dispatch) {
  return {
    updateLayoutFromProps: updatedLayout =>
      dispatch(updateLayout(updatedLayout))
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
