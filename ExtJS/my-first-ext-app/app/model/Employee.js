Ext.define("MyFirstExtApp.model.Employee", {
  statics: {
    lastId: 0,
    getId: function () {
      return ++this.lastId;
    },
  },
  id: Number,
  name: String,
  salart: Number,
  constructor: function (name, salary) {
    this.id = MyFirstExtApp.model.Employee.getId();
    this.name = name;
    this.salary = salary;
  },
  toString: function () {
    return (
      "<p> Id:" +
      this.id +
      "</p><p>Name:" +
      this.name +
      "</p><p>Salary:" +
      this.salary +
      "</p>"
    );
  },
});
