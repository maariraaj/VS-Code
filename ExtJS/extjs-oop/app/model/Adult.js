Ext.define('ExtjsMixins.model.Adult', {
    gender: String,

    constructor: function (gender) {
        this.gender = gender;
    },

    mixins: {
        setName: 'ExtjsMixins.model.Person',
        eat: 'ExtjsMixins.model.Person',
        sleep: 'ExtjsMixins.model.Person'
    },

    getGender: function () {
        return this.gender;
    }
})