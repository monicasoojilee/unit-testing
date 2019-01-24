const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const shouldBuyCar = require('../js/shouldBuyCar.js');

describe ("#shouldBuyCar()", () => {
    it ("should throw an error when there is no car");

    it ("should return false when there are no details about the car", () => {
        let car = {};
        const shouldBuy = shouldBuyCar(car);

        assert.isFalse(shouldBuy);
    });

    it ("should return true when the car is pink", () => {
        let car = { color: 'pink' };
        const shouldBuy = shouldBuyCar(car);

        assert.isTrue(shouldBuy);

    });

    it ("should return false when the car is a hatchback", () => {
        let car = { type: "hatchback" };
        const shouldBuy = shouldBuyCar(car);

        assert.isFalse(shouldBuy);
    });

    it ("should return false when the car is a hatchback and pink", () => {
        let car = { type: "hatchback", color: "pink"};
        const shouldBuy = shouldBuyCar(car);

        assert.isFalse(shouldBuy);
    });

    it ("should return true when the car has 6 litres/100km and is under or equal to $5,000", () => {
        let car = { litresPer100km: 6, price: 5000 };
        const shouldBuy = shouldBuyCar(car)

        // car.price <= 5000
        expect(car.price).to.be.lte(5000) 
        && 
        // car.litresPer100km === 6
        expect(car.litresPer100km).to.equal(6);

        // should return true
        assert.isTrue(shouldBuy)
    });

    it ("should return true when the car has 11 litres/100km and is under or equal to $5,000", () => {
        let car = { litresPer100km: 11, price: 5000 };
        const shouldBuy = shouldBuyCar(car);

        expect(car.price).to.be.lte(5000)
        &&
        expect(car.litresPer100km).to.equal(11);

        assert.isTrue(shouldBuy);
    });

    it ("should return false when the car has 6 litres/100km and is over $5,000", () => {
        let car = { litresPer100km: 6, price: 5001 };
        const shouldBuy = shouldBuyCar(car);

        expect(car.litresPer100km).to.equal(6)
        &&
        expect(car.price).to.be.gt(5000);

        assert.isFalse(shouldBuy);
    });

    it ("should return false when the car has 11 litres/100km and is over $5,000", () => {
        let car = { litresPer100km: 11, price: 5001 };
        const shouldBuy = shouldBuyCar(car);

        expect(car.litresPer100km).to.equal(11)
        &&
        expect(car.price).to.be.gt(5000);

        assert.isFalse(shouldBuy);
    });

    it ("should return false when the car has 5 litres/100km and is under or equal to $5,000", () => {
        let car = { litresPer100km: 5, price: 5000 };
        const shouldBuy = shouldBuyCar(car);

        expect(car.litresPer100km).to.equal(5)
        &&
        expect(car.price).to.be.lte(5000);

        assert.isFalse(shouldBuy);
    });

    it ("should return false when the car has 12 litres/100km and is under or equal to $5,000", () => {
        let car = { litresPer100km: 12, price: 5000 };
        const shouldBuy = shouldBuyCar(car);

        expect(car.litresPer100km).to.equal(12)
        &&
        expect(car.price).to.be.lte(5000);

        assert.isFalse(shouldBuy);
    });
})