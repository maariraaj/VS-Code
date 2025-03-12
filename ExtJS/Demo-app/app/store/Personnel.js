Ext.define("DemoApp.store.Personnel", {
  extend: "Ext.data.Store",

  alias: "store.personnel",

  model: "DemoApp.model.Personnel",

  data: {
    items: [
      {
        name: "Jean Luc",
        designation: "Developer",
        email: "jeanluc.picard@enterprise.com",
        phone: "555-111-1111",
      },
      {
        name: "Worf",
        designation: "Technician",
        email: "worf.moghsson@enterprise.com",
        phone: "555-222-2222",
      },
      {
        name: "Deanna",
        designation: "CEO",
        email: "deanna.troi@enterprise.com",
        phone: "555-333-3333",
      },
      {
        name: "Data",
        designation: "Founder",
        email: "mr.data@enterprise.com",
        phone: "555-444-4444",
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
