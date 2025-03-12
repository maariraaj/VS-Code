Ext.define('CalculatorApp.view.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        displayValue: '0',
        currentValue: '',
        operator: null
    }
})