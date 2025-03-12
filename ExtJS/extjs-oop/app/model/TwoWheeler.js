Ext.define('Vehicle.model.TwoWheeler', {

    config: {
        brand: 'unknown',
        model: 'unknown',
        tyres: 2,
        engine: 'petrol',
        mileage: 40
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    accelerator: function (speed) {
        return this.config.model + ' running at ' + speed + 'kmph';
    }
})