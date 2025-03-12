/**
 * This class is the view model for the Main view of the application.
 */
Ext.define("DemoApp.view.main.MainModel", {
  extend: "Ext.app.ViewModel",

  alias: "viewmodel.main",

  data: {
    name: "DemoApp",

    loremIpsum: "This is coming from lorem ipsum.",
  },

  //TODO - add data, formulas and/or methods to support your view
});
