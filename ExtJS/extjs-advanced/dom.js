Ext.application({
    name: 'ExtjsDom',

    launch: function () {
        Ext.select('strong').set({
            'style': 'color: rebeccapurple; font-weight: bold; font-size: 25px'
        })

        Ext.select('label').set({
            'style': 'color: blue; font-weight: bolder;'
        })

        var inputElements = Ext.select('input');
        inputElements.set({
            'style': 'border:2px solid aqua; border-radius:4px; background-color:yellow'
        });

        var txtFirstName = Ext.get('txtFirstName');
        txtFirstName.set({ 'value': 'Raj' });

        var txtLastName = Ext.get('txtLastName');
        txtLastName.set({ 'value': 'Prabha' });

        var txtEmail = Ext.get('txtEmail');
        txtEmail.set({ 'value': 'raj@pigeon.com' });

        // var pwdPassword = Ext.get('pwdPassword');
        // pwdPassword.set({ 'value': 'Qwe123' });

        Ext.fly('pwdPassword').set({ 'value': 'Qwe123' });

        console.log(txtFirstName.$className);
        console.log(txtLastName.$className);
        console.log(txtEmail.$className);

        console.log(txtFirstName.getValue());
        console.log(txtLastName.getValue());
        console.log(txtEmail.getValue());
        console.log(Ext.fly('pwdPassword').getValue());
    }
})