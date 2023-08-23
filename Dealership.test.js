const Dealership = require('./Dealership');
const Car = require('./Car');

describe('Car', () => {
    
    test('can count number of cars in stock', () => {
        const dealership = new Dealership("James Vehicles", 100)
        expected = 0;
        actual = dealership.countCarsInStock();
        expect(actual).toBe(expected);
    });

    test('can add a car to the stock', () => {
        const dealership = new Dealership("James Vehicles", 100)
        const car = new Car("Tesla", 50000, "Electric")
        dealership.addCarToStock(car); //adding a 
        expected = 1;
        actual = dealership.countCarsInStock();
        expect(actual).toBe(expected);
    });

    test('can get car manufacturer list', () => {
        const dealership = new Dealership("James Vehicles", 100);
        const firstCar = new Car("Tesla", 50000, "Electric");
        const secondCar = new Car("Hyundai", 12000, "Petrol");
    
        dealership.addCarToStock(firstCar);
        dealership.addCarToStock(secondCar);
    
        const expected = ["Tesla", "Hyundai"];
        const actual = dealership.getManufacturerList();
        expect(actual).toEqual(expected); // google says 'toEqual' is more appropriate for arrays instead of 'toBe' (something about deep comparison and strict equality, not entirely sure)
      });

      
});

