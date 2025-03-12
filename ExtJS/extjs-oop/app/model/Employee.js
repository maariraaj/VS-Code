Ext.define("ExtjsOop.model.Employee", {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'id', mapping: 'id' },
    { name: 'fullName', mapping: 'fullName' },
    { name: 'designation', mapping: 'designation' },
    { name: 'salary', mapping: 'salary' }
  ],

  // id: Number,
  // name: String,
  // designation: String,
  // salary: Number,

  // statics: {
  //   lastId: (Number = 1000),
  //   getId: function () {
  //     return ++this.lastId;
  //   },
  // },

  // constructor: function (name, designation, salary) {
  //   this.id = this.getId();
  //   this.name = name;
  //   this.designation = designation;
  //   this.salary = salary;
  // },

  // getId() {
  //   return this.id;
  // },

  // setName(name) {
  //   this.name = name;
  // },
  // getName() {
  //   return this.name;
  // },

  // setDesignation(designation) {
  //   this.designation = designation;
  // },
  // getDesignation() {
  //   return this.designation;
  // },

  // setSalary(salary) {
  //   this.salary = salary;
  // },
  // getSalary() {
  //   return this.salary;
  // },
});
