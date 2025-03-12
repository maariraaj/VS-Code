Ext.application({

    name: 'ExtjsAdvanced',

    models: ['ExtjsAdvanced.model.Student'],

    launch: function () {
        var student = Ext.create('ExtjsAdvanced.model.Student', { studentName: 'Raj' });

        student.on('studentNameChanged', function (studentName) {
            console.log('Student name changed to ' + studentName + '.')
        });

        // student.setStudentName('Kumar');
        // student.setStudentName('Raj');
        // student.setStudentName('Prabha');

        Ext.create('Ext.container.Container', {
            style: {
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: '5px',
                fontSize: '25px',
                color: 'blue'
            },
            width: '50%',
            height: '50%',
            padding: '25 25 25 25',
            renderTo: 'display',
            html: `
            <strong>Student Name:</strong> 
            <p>${student.studentName}</p>
            `
        });

        student.setStudentName('Kumar');
        student.setStudentName('Raj');
        student.setStudentName('Prabha');

    }
});