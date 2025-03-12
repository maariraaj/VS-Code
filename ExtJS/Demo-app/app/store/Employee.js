Ext.define("DemoApp.store.Employee", {
  extend: "Ext.data.Store",

  alias: "store.employee",

  model: "DemoApp.model.Employee",

  data: {
    items: [
      {
        id: 1,
        name: "Jean Luc",
        designation: "Developer",
        salary: 50000,
      },
      {
        id: 2,
        name: "Worf",
        designation: "Technician",
        salary: 30000,
      },
      {
        id: 3,
        name: "Deanna",
        designation: "CEO",
        salary: 12000,
      },
      {
        id: 4,
        name: "Data",
        designation: "Founder",
        salary: 40000,
      },
    ],
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
