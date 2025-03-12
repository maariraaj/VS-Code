Ext.application({
  name: "ExtjsInheritance",
  models: ["ExtjsInheritance.model.Box"],
  launch: function () {
    var boxes = [
      Ext.create("ExtjsInheritance.model.Box"),
      Ext.create("ExtjsInheritance.model.Box", 12.0, 15.0, 26.0),
    ];

    Ext.Array.each(boxes, function (box) {
      Ext.create("Ext.panel.Panel", {
        title: "My Tech",
        header: {
          style: { backgroundColor: "grey", color: "black" },
        },
        width: 200,
        height: 300,
        bodyPadding: 30,
        renderTo: "display",
        html: `
            <div>
                <strong>Properties of Box: </strong>
                ${box.toString()}
                <p>Volume: ${box.volume()} </p>
            </div>
            `,
      });
    });
  },
});
