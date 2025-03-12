Ext.define('Vehicle.model.GearlessScooter', {
    extend: 'Vehicle.model.TwoWheeler',

    config: {
        bonnetSpace: 30,
    },

    constructor: function (config) {
        this.initConfig(config);
    }
})