Ext.define("ExtjsInheritance.model.Box", {
  height: Number,
  width: Number,
  depth: Number,

  constructor: function () {
    //default constructor
    this.height = this.width = this.depth = 0;
  },

  constructor: function (height, width, depth) {
    //constructor overloading
    this.height = height;
    this.width = width;
    this.depth = depth;
  },

  volume: function () {
    return this.height * this.width * this.depth;
  },

  toString: function () {
    return `
        <p> Height:${this.height}</p>
        <p> Width:${this.width}</p>
        <p> Depth:${this.depth}</p>
        `;
  },
});
