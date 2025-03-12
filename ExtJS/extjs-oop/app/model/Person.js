Ext.define('ExtjsMixins.model.Person', {
    name: String,

    constructor: function (name) {
        this.name = name;
    },

    setName: function (name) {
        this.name = name;
    },

    getName: function () {
        return this.name;
    },

    eat: function (food) {
        return this.name + ' eats ' + food;
    },

    sleep: function (hours) {
        return this.name + ' sleeps for ' + hours + ' hours';
    }
})