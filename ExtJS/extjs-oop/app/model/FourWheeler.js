Ext.define('Vehicle.model.FourWheeler', {

    config: {
        brand: 'unknown',
        model: 'unknown',
        engine: 'petrol',
        transmission: 'manual',
        seaters: 4
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    mixins: {
        accelerator: 'Vehicle.model.TwoWheeler'
    }
})