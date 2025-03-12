Ext.define('CalculatorApp.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    controller: 'main',
    viewModel: 'main',
    title: 'Colorful Calculator',

    width: 320,
    height: 450,
    bodyPadding: 10,
    layout: 'vbox',

    items: [
        {
            xtype: 'textfield',
            reference: 'display',
            bind: '{displayValue}',
            readOnly: true,
            fieldStyle: 'font-size: 24px; text-align: right; background: #282c34; color: #61dafb;',
            width: '100%'
        },
        {
            xtype: 'container',
            layout: { type: 'vbox', align: 'center' },
            width: '100%',
            items: [
                {
                    xtype: 'container',
                    layout: { type: 'hbox', pack: 'center' },
                    width: '100%',
                    defaults: { xtype: 'button', width: 60, height: 60, margin: 5 },
                    items: [
                        { text: '7', handler: 'onButtonClick' },
                        { text: '8', handler: 'onButtonClick' },
                        { text: '9', handler: 'onButtonClick' },
                        { text: '/', handler: 'onOperatorClick', style: 'background-color: #f39c12; color: white;' }
                    ]
                },
                {
                    xtype: 'container',
                    layout: { type: 'hbox', pack: 'center' },
                    width: '100%',
                    defaults: { xtype: 'button', width: 60, height: 60, margin: 5 },
                    items: [
                        { text: '4', handler: 'onButtonClick' },
                        { text: '5', handler: 'onButtonClick' },
                        { text: '6', handler: 'onButtonClick' },
                        { text: '*', handler: 'onOperatorClick', style: 'background-color: #f39c12; color: white;' }
                    ]
                },
                {
                    xtype: 'container',
                    layout: { type: 'hbox', pack: 'center' },
                    width: '100%',
                    defaults: { xtype: 'button', width: 60, height: 60, margin: 5 },
                    items: [
                        { text: '1', handler: 'onButtonClick' },
                        { text: '2', handler: 'onButtonClick' },
                        { text: '3', handler: 'onButtonClick' },
                        { text: '-', handler: 'onOperatorClick', style: 'background-color: #f39c12; color: white;' }
                    ]
                },
                {
                    xtype: 'container',
                    layout: { type: 'hbox', pack: 'center' },
                    width: '100%',
                    defaults: { xtype: 'button', width: 60, height: 60, margin: 5 },
                    items: [
                        { text: '0', handler: 'onButtonClick' },
                        { text: 'C', handler: 'onClearClick', style: 'background-color: #e74c3c; color: white;' },
                        { text: '=', handler: 'onEqualsClick', style: 'background-color: #2ecc71; color: white;' },
                        { text: '+', handler: 'onOperatorClick', style: 'background-color: #f39c12; color: white;' }
                    ]
                }
            ]
        }
    ]
});
