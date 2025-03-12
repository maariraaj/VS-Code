Ext.define("FirstExtApp.model.Student", {
  //extend: "FirstExtApp.model.Parent",
  id: Number,
  name: String,
  section: String,
  // constructor: function (
  //   id,
  //   name,
  //   section,
  //   parentName,
  //   parentRelation,
  //   location,
  //   city,
  //   state
  // ) {
  //   this.callParent([parentName, parentRelation, location, city, state]);
  //   this.id = id;
  //   this.name = name;
  //   this.section = section;
  // },

  constructor: function (id, name, section, parent) {
    this.id = id;
    this.name = name;
    this.section = section;
    this.parent = Ext.create(
      "FirstExtApp.model.Parent",
      parent.parentName,
      parent.parentRelation,
      parent.address
    );
  },

  toString: function () {
    return `
            <div>
                <h3>Student Details</h3>
                <p>id: ${this.id}</p>
                <p>name: ${this.name}</p>
                <p>section: ${this.section}</p>
                <div>
                    <h4>Parent Details</h4>
                    <p>${this.parent.toString()}</p>
                </div>
            </div>
        `;
  },
});

//for constructor method, replace parent with superclass in the line number 43
