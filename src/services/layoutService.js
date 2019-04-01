import LayotModel from "../models/layout";
import LayoutData from "../config_data/layots.json";

class LayoutService {
  getLayots = () => {
    const json = LayoutData;
    return json.map(singleJson => new LayotModel(singleJson));
  };
}

export default new LayoutService();
