import LayoutModel from "../models/layout";
import LayoutData from "../config_data/layots.json";

class LayoutService {
  getLayouts = () => {
    const json = LayoutData;
    return json.map(singleJson => new LayoutModel(singleJson));
  };

  getLayoutById = (layouts,id) => {
        for (let i = 0; i < layouts.length; i++)
      if (layouts[i].id === id) {
        return layouts[i];
      }
  };

  // updateLayout=(layout,cell,newValue)=> {
  //
  // }
}

export default new LayoutService();
