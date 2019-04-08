import ElemntModel from "../models/element";
import ElementData from "../config_data/elements.json";

class ElementService {
  getAllElements = () => {
    const json = ElementData;
    return json.map(singleJson => new ElemntModel(singleJson));
  };

  getHTMLElementById(elemntId) {
    const elemnts = this.getAllElements();
    elemnts.forEach(element => {
      let itemId = "item-" + element.id;
      if (parseInt(element.id) === elemntId) {
        let div = document.createElement("div");
        div.classList.add("element-to-select");
        let textnode = document.createTextNode(itemId);
        div.appendChild(textnode);
        return div;
      }
    });
  }

  getHTMLStringById(elemntId) {
    const elemnts = this.getAllElements();
    elemnts.forEach(element => {
      let itemId = "item-" + element.id;
      if (parseInt(element.id) === elemntId) {
        let div = document.createElement("div");
        div.classList.add("element-to-select");
        let textnode = document.createTextNode(itemId);
        div.appendChild(textnode);
        return '<div className="element-to-select">' + itemId + "</div>";
      }
    });
  }
}

export default new ElementService();
