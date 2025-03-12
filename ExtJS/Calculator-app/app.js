Ext.application({
    name: 'CalculatorApp',

    launch: function () {
        Ext.create({
            xtype: 'mainview',
            renderTo: Ext.getBody()
        });
    }
})