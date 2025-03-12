Ext.application({
  name: "MyFirstExtApp",
  models: ["MyFirstExtApp.model.Employee"],
  launch: function () {
    var employees = [
      Ext.create("MyFirstExtApp.model.Employee", "Vijay", 50000),
      Ext.create("MyFirstExtApp.model.Employee", "Ajith", 10000),
      Ext.create("MyFirstExtApp.model.Employee", "Kamal", 150000),
      Ext.create("MyFirstExtApp.model.Employee", "Rajini", 60000),
      Ext.create("MyFirstExtApp.model.Employee", "Mani", 120000),
    ];
    Ext.Array.each(employees, function (employee) {
      Ext.create("Ext.panel.Panel", {
        title: "My Panel",
        header: {
          style: { backgroundColor: "black", color: "white" },
        },
        width: 300,
        height: 300,
        bodyPadding: 50,
        renderTo: "display",
        html: `
                    <h3>My Technologies</h3>
                    <div>
                        <strong>Employee Details</strong>
                        <p>${employee.toString()}</p>
                    </div>
                `,
      });
    });
  },
});
