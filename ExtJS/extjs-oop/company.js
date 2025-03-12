Ext.application({
    name: 'ExtjsOop',

    models: ['ExtjsOop.model.Employee'],

    launch: function () {
        // var employees = [
        //     Ext.create('ExtjsOop.model.Employee', 'Raj', 'Intern', 15000),
        //     Ext.create('ExtjsOop.model.Employee', 'Kumar', 'Engineer', 80000),
        //     Ext.create('ExtjsOop.model.Employee', 'Muthu', 'CEO', 165000),
        // ];

        var employees = [
            { id: 1001, fullName: 'Raj', designation: 'Intern', salary: 15000 },
            { id: 1002, fullName: 'Kumar', designation: 'Engineer', salary: 80000 },
            { id: 1003, fullName: 'Muthu', designation: 'CEO', salary: 160000 }
        ]

        var employeeStore = Ext.create('Ext.data.Store', {
            model: 'ExtjsOop.model.Employee',
            data: employees
        });

        Ext.create('Ext.grid.Panel', {
            title: 'My Grid',
            renderTo: 'display',
            width: 1000,
            collapsible: true,
            enableColumnMove: true,
            enableColumnResize: true,
            store: employeeStore,
            columns: [
                {
                    header: 'id',
                    dataIndex: 'id'
                },
                {
                    header: 'Fullname',
                    width: 500,
                    dataIndex: 'fullName'
                },
                {
                    header: 'Designation',
                    dataIndex: 'designation'
                },
                {
                    header: 'Salary',
                    dataIndex: 'salary'
                }
            ]
        })
    }
})