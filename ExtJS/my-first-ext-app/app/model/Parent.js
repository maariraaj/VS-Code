Ext.define("FirstExtApp.model.Parent", {
  //extend: "FirstExtApp.model.Address",
  parentName: String,
  parentRelation: String,
  // constructor: function (parentName, parentRelation, location, city, state) {
  //   this.callParent([location, city, state]);
  //   this.parentName = parentName;
  //   this.parentRelation = parentRelation;
  // },

  constructor: function (parentName, parentRelation, address) {
    this.parentName = parentName;
    this.parentRelation = parentRelation;
    this.address = Ext.create("FirstExtApp.model.Address");
    this.address.setLocation(address.getLocation());
    this.address.setCity(address.getCity());
    this.address.setState(address.getState());
  },

  toString: function () {
    return `
            <div>
                <p>name: ${this.parentName}</p>
                <p>relation: ${this.parentRelation}</p>
                <div>
                    <strong>Residing at</strong>
                    <p>${this.address.toString()}</p>
                </div>
            </div>
        `;
  },
});

//for constructor method, replace address with superclass in the line number 27
