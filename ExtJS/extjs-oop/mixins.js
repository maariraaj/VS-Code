Ext.application({
    name: 'ExtjsMixins',

    models: ['ExtjsMixins.model.Person', 'ExtjsMixins.model.Child', 'ExtjsMixins.model.Adult'],

    launch: function () {
        var person = Ext.create('ExtjsMixins.model.Person', 'Raj');

        var child = Ext.create('ExtjsMixins.model.Child', 12);
        child.setName('Muthu');

        var adult = Ext.create('ExtjsMixins.model.Adult', 'male');
        adult.setName('Kumar');

        Ext.create('Ext.container.Container', {
            style: { borderColor: 'red', borderStyle: 'solid', borderWidth: '15px' },
            width: '50%',
            height: '50%',
            padding: '25 25 25 25',
            renderTo: 'display',
            html: `
            <strong>Methods of Person object </strong>
            <p>getName: ${person.getName()}</p>
            <p>Eat: ${person.eat('All foods')}</p>
            <p>Sleep: ${person.sleep(8)}</p>
            <hr />
            <strong>Methods of Child object </strong>
            <p>getAge: ${child.getAge()}</p>
            <p>Eat: ${child.eat('Dosa')}</p>
            <p>Sleep: ${child.sleep(12)}</p>
            <hr />
            <strong>Methods of Adult object </strong>
            <p>getGender: ${adult.getGender()}</p>
            <p>Eat: ${adult.eat('Chappathi')}</p>
            <p>Sleep: ${adult.sleep(7)}</p>
            <hr />
            `
        })
    }
})