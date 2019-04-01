import ElemntModel from "../models/element";
import ElementData from "../config_data/elements.json";

class ElementService {
  getAllElements = () => {
    const json = ElementData;
    return json.map(singleJson => new ElemntModel(singleJson));
  };
}

export default new ElementService();
