Ext.define('Vehicle.model.Hatchback', {
    extend: 'Vehicle.model.FourWheeler',

    config: {
        extraTyre: true
    },

    constructor: function (config) {
        this.initConfig(config);
    },

})