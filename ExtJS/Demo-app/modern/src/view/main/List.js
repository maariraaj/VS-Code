/**
 * This view is an example list of people.
 */
// Ext.define("DemoApp.view.main.List", {
//   extend: "Ext.grid.Grid",
//   xtype: "mainlist",

//   requires: ["DemoApp.store.Personnel"],

//   title: "Personnel",

//   store: {
//     type: "personnel",
//   },

//   columns: [
//     {
//       text: "Name",
//       dataIndex: "name",
//       width: 100,
//       cell: {
//         userCls: "bold",
//       },
//     },
//     {
//       text: "Designation",
//       dataIndex: "designation",
//       width: 230,
//     },
//     {
//       text: "Email",
//       dataIndex: "email",
//       width: 230,
//     },
//     {
//       text: "Phone",
//       dataIndex: "phone",
//       width: 150,
//     },
//   ],

//   listeners: {
//     select: "onItemSelected",
//   },
// });

Ext.define("DemoApp.view.main.List", {
  extend: "Ext.grid.Grid",
  xtype: "mainlist",

  requires: ["DemoApp.store.Employee"],

  title: "Employee Details",

  store: {
    type: "employee",
  },

  columns: [
    {
      text: "Id",
      dataIndex: "id",
      width: 50,
    },
    {
      text: "Name",
      dataIndex: "name",
      width: 100,
      cell: {
        userCls: "bold",
      },
    },
    {
      text: "Designation",
      dataIndex: "designation",
      width: 100,
    },
    {
      text: "Salary",
      dataIndex: "salary",
      width: 50,
    },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
