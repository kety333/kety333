import React from "react";
import GridLayout from "react-grid-layout";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as layoutActions from "../../redux/actions/layotActions";


class ElementsGridLayout extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired,
    layoutId: PropTypes.number.isRequired,
    layoutsList:PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  state = {
    layoutData:[]
  };

  componentDidMount() {
    const layoutById = this.props.layoutsList[this.props.layoutId -1];
    const layoutTemp = (layoutById !== undefined )? layoutById.layout : [];
    this.setState({
        layoutData:layoutTemp
    });
  }

  dragOver = event => {
    event.preventDefault();
    event.dataTransfer.setData("targetContent", event.target.id);
  };

  onDrop = (event) => {
      event.preventDefault();

    const data = event.dataTransfer.getData("dragContent");
    const targetLayoutElementId = event.target.id;

      this.setState(state => {
          const layoutData = state.layoutData.map(item =>{
              if(item.id === parseInt(targetLayoutElementId)){
                  item.value = data;
              }
              return item;
          } );

          return {
              layoutData
          };
      });
      this.props.actions.updateLayout(this.state.layoutData);
      // this.setState({
      //     layoutData: update(this.state.layoutData, {elementId: {value: {$set: data}}})
      // })
     // this.setState({
     //      layoutData[this.state.layoutData-1].value:data
     // })
   // let newLayout = {...this.props.layoutsList[this.props.layoutId -1]}
      // event.target.appendChild(data);

      // this.setState(state => {
      //     const layouts = state.layout.map((item, j) => {
      //         if (j === i) {
      //             return item + 1;
      //         } else {
      //             return item;
      //         }
      //     });
      //
      //     return {
      //         list,
      //     };
    // const layouts = { ...this.state, title: event.target.value };
    // this.props.actions.updateLayout(this.state.course);
    //   this.setState({ layouts });
    //      this.setState({
    //       ...this.state,
    //       layouts
    //   });
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
        {this.state.layoutData.map(item => (
          <div
            key={item.i}
            id={item.id}
            onDrop={e => this.onDrop(e, "complete")}
            onDragOver={this.dragOver}
          >
              {item.value ? <div className="element-to-select" >{item.value}</div> :   item.i}
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

export default connect(mapStateToProps, mapActionsToProp)(ElementsGridLayout)