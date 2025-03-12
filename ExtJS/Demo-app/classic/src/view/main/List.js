/**
 * This view is an example list of people.
 */
// Ext.define("DemoApp.view.main.List", {
//   extend: "Ext.grid.Panel",
//   xtype: "mainlist",

//   requires: ["DemoApp.store.Personnel"],

//   title: "Personnel",

//   store: {
//     type: "personnel",
//   },

//   columns: [
//     { text: "Name", dataIndex: "name" },
//     { text: "Designation", dataIndex: "designation" },
//     { text: "Email", dataIndex: "email", flex: 1 },
//     { text: "Phone", dataIndex: "phone", flex: 1 },
//   ],

//   listeners: {
//     select: "onItemSelected",
//   },
// });

Ext.define("DemoApp.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",

  requires: ["DemoApp.store.Employee"],

  title: "Employee Details",

  store: {
    type: "employee",
  },

  columns: [
    { text: "Id", dataIndex: "id" },
    { text: "Name", dataIndex: "name" },
    { text: "Designation", dataIndex: "designation" },
    { text: "Salary", dataIndex: "salary" },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
