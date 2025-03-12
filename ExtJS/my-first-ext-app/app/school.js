Ext.application({
  name: "FirstExtApp",
  // models: ["FirstExtApp.model.Parent", "FirstExtApp.model.Student"],
  models: [
    "FirstExtApp.model.Address",
    "FirstExtApp.model.Parent",
    "FirstExtApp.model.Student",
  ],
  launch: function () {
    //   var address1 = Ext.create(
    //     "FirstExtApp.model.Address",
    //     "PB Extn.",
    //     "Davangere",
    //     "Karnataka"
    //   );
    //   var address2 = Ext.create(
    //     "FirstExtApp.model.Address",
    //     "Hinjewadi",
    //     "Pune",
    //     "Maharashtra"
    //   );
    //   var parent1 = Ext.create(
    //     "FirstExtApp.model.Parent",
    //     "Ratna",
    //     "Mother",
    //     address1.location,
    //     address1.city,
    //     address1.state
    //   );
    //   var parent2 = Ext.create(
    //     "FirstExtApp.model.Parent",
    //     "Ramesh",
    //     "Father",
    //     address2.location,
    //     address2.city,
    //     address2.state
    //   );
    //   var students = [
    //     Ext.create(
    //       "FirstExtApp.model.Student",
    //       26,
    //       "Kavya",
    //       "BCA",
    //       parent1.parentName,
    //       parent1.parentRelation,
    //       address1.location,
    //       address1.city,
    //       address1.state
    //     ),
    //     Ext.create(
    //       "FirstExtApp.model.Student",
    //       13,
    //       "Kiran",
    //       "BE",
    //       parent1.parentName,
    //       parent1.parentRelation,
    //       address1.location,
    //       address1.city,
    //       address1.state
    //     ),
    //     Ext.create(
    //       "FirstExtApp.model.Student",
    //       12,
    //       "Dilip",
    //       "MBA",
    //       parent2.parentName,
    //       parent2.parentRelation,
    //       address2.location,
    //       address2.city,
    //       address2.state
    //     ),
    //   ];
    var address1 = Ext.create("FirstExtApp.model.Address");
    address1.setLocation("PB Extn.");
    address1.setCity("Devangre");
    address1.setState("Karnataka");

    var address2 = Ext.create("FirstExtApp.model.Address");
    address2.setLocation("Hinjewadi");
    address2.setCity("Pune");
    address2.setState("Maharastra");

    var parent1 = Ext.create(
      "FirstExtApp.model.Parent",
      "Ratna",
      "Mother",
      address1
    );

    var parent2 = Ext.create(
      "FirstExtApp.model.Parent",
      "Ramesh",
      "Father",
      address2
    );

    var students = [
      Ext.create("FirstExtApp.model.Student", 20, "Kavya", "BCA", parent1),
      Ext.create("FirstExtApp.model.Student", 19, "Kiran", "BE", parent1),
      Ext.create("FirstExtApp.model.Student", 24, "Dilip", "MBA", parent2),
    ];

    Ext.Array.each(students, function (student) {
      Ext.create("Ext.panel.Panel", {
        title: "Dilz Panel",
        header: {
          style: { backgroundColor: "black", color: "white" },
        },
        width: 300,
        height: 500,
        bodyPadding: 50,
        renderTo: "display",
        html: `
                    <h3>St. Aloysius College</h3>
                    <div>
                        <p>${student.toString()}</p>
                    </div>
                `,
      });
    });
  },
});
