Ext.application({
    name: 'Vehicle',

    models: [
        'Vehicle.model.TwoWheeler',
        'Vehicle.model.GearlessScooter',
        'Vehicle.model.Bike',
        'Vehicle.model.FourWheeler',
        'Vehicle.model.Hatchback',
        'Vehicle.model.SUV'
    ],

    launch: function () {
        var jupiter = Ext.create('Vehicle.model.GearlessScooter', {
            brand: 'TVS',
            model: 'Jupiter',
            mileage: 50,
            bonnetSpace: 32
        });

        var royalEnfield = Ext.create('Vehicle.model.Bike', {
            brand: 'Royal Enfield',
            model: 'Classic',
            mileage: 35,
            gears: 5
        });

        var baleno = Ext.create('Vehicle.model.Hatchback', {
            brand: 'Maruti Suzuki',
            model: 'Baleno',

        });

        var safari = Ext.create('Vehicle.model.SUV', {
            brand: 'TATA',
            model: 'Safari',
            engine: 'Diesel',
            transmission: 'Auto',
            seaters: 6
        });

        Ext.create('Ext.container.Container', {
            style: {
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: '5px',
                fontSize: '25px',
                color: 'blue',
            },
            width: '90%',
            height: '90%',
            padding: '25 25 25 25',
            renderTo: 'display',
            html: `
            <strong style='color:red'>Specifications of ${jupiter.getBrand()} ${jupiter.getModel()}</>
            <p>Tyres:${jupiter.getTyres()}</p>
            <p>Engine:${jupiter.getEngine()}</p>
            <p>Mileage:${jupiter.getMileage()}</p>
            <p>Tyres:${jupiter.getTyres()}</p>
            <p>BonnetSpace:${jupiter.getBonnetSpace()}</p>
            <p>Accelerated: ${jupiter.accelerator(50)}</p>
            <hr />

            <strong style='color:red'>Specifications of ${royalEnfield.getBrand()} ${royalEnfield.getModel()}</strong>
            <p>Tyres:${royalEnfield.getTyres()}</p>
            <p>Engine:${royalEnfield.getEngine()}</p>
            <p>Mileage:${royalEnfield.getMileage()}</p>
            <p>Tyres:${royalEnfield.getTyres()}</p>
            <p>Gears:${royalEnfield.getGears()}</p>
            <p>Accelerated: ${royalEnfield.accelerator(40)}</p>
            <hr />

            <strong style='color:red'>Specifications of ${baleno.getBrand()} ${baleno.getModel()}</strong>
            <p>Engine:${baleno.getEngine()}</p>
            <p>Transmission:${baleno.getTransmission()}</p>
            <p>Seaters:${baleno.getSeaters()}</p>
            <p>ExtraTyres:${baleno.getExtraTyre()}</p>
            <p>Accelerated: ${baleno.accelerator(100)}</p>
            <hr />

            <strong style='color:red'>Specifications of ${safari.getBrand()} ${safari.getModel()}</strong>
            <p>Engine:${safari.getEngine()}</p>
            <p>Transmission:${safari.getTransmission()}</p>
            <p>Seaters:${safari.getSeaters()}</p>
            <p>Accelerated: ${safari.accelerator(100)}</p>
            <hr />
            `
        })
    }
})