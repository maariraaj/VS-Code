Ext.define('Vehicle.model.SUV', {
    extend: 'Vehicle.model.FourWheeler',

    config: {
        fourWheelDrive: false
    },

    constructor: function (config) {
        this.initConfig(config);
    },

})