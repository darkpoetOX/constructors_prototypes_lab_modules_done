const Car = require('./Car');

describe('Car', () => { 
  
    test('can get manufacturer', () => {
        const car = new Car("Volkswagen", 30000, "Petrol")
        expected = "Volkswagen";
        actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can set manufacturer', () => {
        const car = new Car("Volkswagen", 30000, "Petrol")
        car.setManufacturer("BMW");
        expected = "BMW";
        actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can get price', () => {
        const car = new Car("Volkswagen", 30000, "Petrol")
        expected = 30000;
        actual = car.getPrice();
        expect(actual).toBe(expected);
    });

    test('can set price', () => {
        const car = new Car("Volkswagen", 30000, "Petrol")
        car.setPrice(15000);
        expected = 15000;
        actual = car.getPrice();
        expect(actual).toBe(expected);
    });

    test('can get engine type', () => {
        const car = new Car("Volkswagen", 30000, "Petrol")
        expected = "Petrol";
        actual = car.getEngineType();
        expect(actual).toBe(expected);
    });

    test('can set engine type', () => {
        const car = new Car("Volkswagen", 30000, "Petrol")
        car.setEngineType("Diesel");
        expected = "Diesel";
        actual = car.getEngineType();
        expect(actual).toBe(expected);
    });
  
  });