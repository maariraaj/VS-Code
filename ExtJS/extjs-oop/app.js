// Ext.application({
//   name: "ExtjsOop",
//   models: ["ExtjsOop.model.Box"],
//   launch: function () {
//     var boxes = [
//       Ext.create("ExtjsOop.model.Box", 12, 15, 26),
//       Ext.create("ExtjsOop.model.Box", 1.2, 1.5, 2.6),
//       Ext.create("ExtjsOop.model.Box", 12.15, 15.26, 26.3),
//     ];

//     Ext.Array.each(boxes, function (box) {
//       Ext.create("Ext.panel.Panel", {
//         title: "My Box",
//         header: {
//           style: { backgroundColor: "black", color: "white" },
//         },
//         width: 300,
//         height: 300,
//         bodyPadding: 50,
//         renderTo: "display",
//         html: `
//                 <strong>Properties of the Box</strong>
//                 <div>
//                     ${box}
//                     <p>Volume: ${box.volume()}</p>
//                 </div>`,
//       });
//     });
//   },
// });

// Ext.application({
//   name: "ExtjsOop",
//   models: ["ExtjsOop.model.Employee"],
//   launch: function () {
//     var employee1 = Ext.create("ExtjsOop.model.Employee");
//     employee1.setName("Dilip");
//     employee1.setDesignation("Engineer");
//     employee1.setSalary(50000);

//     var employee2 = Ext.create("ExtjsOop.model.Employee");
//     employee2.setName("Raj");
//     employee2.setDesignation("Doctor");
//     employee2.setSalary(120000);

//     var employee3 = Ext.create("ExtjsOop.model.Employee");
//     employee3.setName("Kumar");
//     employee3.setDesignation("Technician");
//     employee3.setSalary(75000);

//     var employees = [employee1, employee2, employee3];

//     Ext.Array.each(employees, function (employee) {
//       Ext.create("Ext.panel.Panel", {
//         title: "My Box",
//         header: {
//           style: { backgroundColor: "black", color: "white" },
//         },
//         width: 300,
//         height: 300,
//         bodyPadding: 50,
//         renderTo: "display",
//         html: `
//                 <strong>Employee details of id: ${ExtjsOop.model.Employee.getId()}</strong>
//                 <div>
//                     <p>Name: ${employee.getName()}</p>
//                     <p>Designation: ${employee.getDesignation()}</p>
//                     <p>Salary: ${employee.getSalary()}</p>
//                 </div>`,
//       });
//     });
//   },
// });

// Ext.application({
//   name: "ExtjsOop",
//   models: ["ExtjsOop.model.Box", "ExtjsOop.model.BoxWeight"],
//   launch: function () {
//     var boxes = [
//       Ext.create("ExtjsOop.model.Box", 12, 15, 26),
//       Ext.create("ExtjsOop.model.BoxWeight", 120, 150, 260, 300),
//     ];

//     Ext.Array.each(boxes, function (box) {
//       Ext.create("Ext.panel.Panel", {
//         title: "My Box",
//         header: {
//           style: { backgroundColor: "black", color: "white" },
//         },
//         width: 300,
//         height: 300,
//         bodyPadding: 50,
//         renderTo: "display",
//         html: `
//                 <strong>Properties of Box</strong>
//                 <div>
//                     ${box}
//                     <p>Volume: ${box.volume()}</p>
//                 </div>`,
//       });
//     });
//   },
// });

Ext.application({
  name: "ExtjsOop",

  models: ["ExtjsOop.model.BasicPhone", "ExtjsOop.model.IntermediatePhone", "ExtjsOop.model.SmartPhone"],

  launch: function () {
    var basic = Ext.create(
      "ExtjsOop.model.BasicPhone",
      "Nokia",
      "6030",
      "GSM / HSPA",
      "114.2 x 50.9 x 12.8 mm",
      89.6,
      "Single SIM (Micro-SIM)",
      "TFT 256K colors",
      2.4,
      "240x320 pixels",
      true,
      true,
      256,
      true,
      1.3,
      1020,
      442
    );

    var intermediate = Ext.create(
      "ExtjsOop.model.IntermediatePhone",
      "Nokia",
      "Asha 500",
      "GSM",
      "100.3 x 58.1 x 12.8 mm",
      101,
      "Micro SIM",
      "TFT Capacitive Touchscreen",
      2.8,
      "240 x 320 pixels",
      "Nokia Asha Software Platform 1.1.1",
      true,
      true,
      64,
      true,
      2,
      false,
      true,
      true,
      true,
      "Accelerometer, Proximity",
      "WAP 2.0 / xHTML, HTML",
      1200,
      8844
    );

    var smartphone = Ext.create("ExtjsOop.model.SmartPhone",
      "Apple",
      "Iphone 16 pro max",
      "GSM / CDSM / HSPA / EVDO / LTE",
      "158.2 x 77.9 x 7.3 mm",
      188,
      "Nano-SIM",
      "LED backlit IPS LCD, Capacitive touchscreen",
      6.5,
      "1080 x 1920 pixels",
      "iOS 10.0.1",
      "Apple A18 Bionic",
      "Quad-core 2.34 GHz",
      "PowerVR Series 7XT plus",
      false,
      true,
      256,
      true,
      12,
      "2160p @ 30fps",
      true,
      true,
      true,
      false,
      true,
      "Fingerprint, accelerometer, proximity",
      "HTML5 (Safari)",
      2900,
      166249
    )

    var phones = [basic, intermediate, smartphone];

    Ext.Array.each(phones, function (phone) {
      // Ext.create("Ext.panel.Panel", {
      //   title: "Phones",
      //   header: {
      //     style: { backgroundColor: "black", color: "white" },
      //   },
      //   width: 500,
      //   height: 1500,
      //   bodyPadding: 50,
      //   renderTo: "display",
      //   html: `${phone}`,
      // });

      Ext.create("Ext.container.Container", {
        style: { backgroundColor: "lemonchiffon", color: "blue", borderStyle: "solid", borderWidth: '3px' },
        width: 500,
        height: 1300,
        padding: '25 25 25 25',
        renderTo: "display",
        html: `${phone}`,
      });
    });
  },
});
