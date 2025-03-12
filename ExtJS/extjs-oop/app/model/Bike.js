Ext.define('Vehicle.model.Bike', {
    extend: 'Vehicle.model.TwoWheeler',

    config: {
        gears: 4
    },

    constructor: function (config) {
        this.initConfig(config);
    }
})