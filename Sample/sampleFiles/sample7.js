class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKilometers, timeInMinutes) {
        const distanceCost = distanceInKilometers * this.costPerKilometer;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalFare = this.baseFare + distanceCost + timeCost;
        return totalFare;
    }
}

// Example usage
const baseFare = 2.5; // Base fare in dollars
const costPerKilometer = 1.5; // Cost per kilometer in dollars
const costPerMinute = 0.3; // Cost per minute in dollars

const calculator = new UberPriceCalculator(baseFare, costPerKilometer, costPerMinute);

const distance = 10; // Distance in kilometers
const time = 20; // Time in minutes

const totalPrice = calculator.calculatePrice(distance, time);
console.log(`Uber price for a ${distance} km ride taking ${time} minutes: $${totalPrice}`);
