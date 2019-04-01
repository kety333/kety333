export default class Layout {
  constructor(json) {
    this.id = json.id;
    this.cols = json.cols;
    this.rowHeight = json.rowHeight;
    this.layout = json.layout;
  }
}
