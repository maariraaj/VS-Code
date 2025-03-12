Ext.define('ExtjsMixins.model.Child', {
    age: Number,

    constructor: function (age) {
        this.age = age;
    },

    mixins: {
        setName: 'ExtjsMixins.model.Person',
        eat: 'ExtjsMixins.model.Person',
        sleep: 'ExtjsMixins.model.Person'
    },

    getAge: function () {
        return this.age;
    }
})