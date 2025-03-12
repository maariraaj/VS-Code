Ext.define('CalculatorApp.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onButtonClick: function (btn) {
        var vm = this.getViewModel();
        var current = vm.get('displayValue');
        if (current === '0') {
            vm.set('displayValue', btn.text);
        } else {
            vm.set('displayValue', current + btn.text);
        }
    },

    onOperatorClick: function (btn) {
        var vm = this.getViewModel();
        vm.set('currentValue', vm.get('displayValue'));
        vm.set('displayValue', '0');
        vm.set('operator', btn.text);
    },

    onEqualsClick: function () {
        var vm = this.getViewModel();
        var num1 = parseFloat(vm.get('currentValue'));
        var num2 = parseFloat(vm.get('displayValue'));
        var operator = vm.get('operator');
        var result = 0;

        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
        }
        vm.set('displayValue', result);
        vm.set('currentValue', '');
        vm.set('operator', null);
    },

    onClearClick: function () {
        var vm = this.getViewModel();
        vm.set('displayValue', '0');
        vm.set('currentValue', '');
        vm.set('operator', null);
    }
})