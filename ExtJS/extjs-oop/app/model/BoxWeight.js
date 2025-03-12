Ext.define("ExtjsOop.model.BoxWeight", {
  extend: "ExtjsOop.model.Box",

  weight: Number,

  constructor: function (height, width, depth, weight) {
    this.superclass.constructor(height, width, depth);
    this.weight = weight;
  },

  toString: function () {
    return `
    ${this.superclass.toString()}
    <p>Weight: ${this.weight} </p>
    `;
  },
});
