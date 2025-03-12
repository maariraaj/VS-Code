Ext.define("ExtjsOop.model.Box", {
  height: Number,
  width: Number,
  depth: Number,

  constructor: function (height, width, depth) {
    this.height = height;
    this.width = width;
    this.depth = depth;
  },

  volume: function () {
    return this.height * this.width * this.depth;
  },

  toString: function () {
    return `
    <p>Height: ${this.height}</p>
    <p>Width: ${this.width}</p>
    <p>Depth:${this.depth}</p>`;
  },
});
