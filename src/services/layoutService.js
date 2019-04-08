import LayoutModel from "../models/layout";
import LayoutData from "../config_data/layots.json";

class LayoutService {
  getLayouts = () => {
    const json = LayoutData;
    return json.map(singleJson => new LayoutModel(singleJson));
  };

  getLayoutsObject = () => {
    let layoutObject = {};
    const layoutsArray = this.getLayouts();
    for (let i = 0; i < layoutsArray.length; i++) {
      layoutObject[i] = layoutsArray[i];
    }
    return layoutObject;
  };

  getLayoutById = (layouts, id) => {
    for (let key in layouts) {
      if (parseInt(layouts[key].id) === id) {
        return layouts[key];
      }
    }
  };

  // updateLayout=(layout,cell,newValue)=> {
  //
  // }
}

export default new LayoutService();
