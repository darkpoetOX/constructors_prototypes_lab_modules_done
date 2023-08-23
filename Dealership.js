const Car = require('./Car');

const Dealership = function(name, maxNumCars){ 
    this.name = name;
    this.maxNumCars = maxNumCars;
    this.stock = []; // will start empty to begin with
}

Dealership.prototype.countCarsInStock = function(){
    return this.stock.length;
}

Dealership.prototype.addCarToStock = function(car){ // car would be an instance inherited from the Car module
    if (this.stock.length < this.maxNumCars){
        this.stock.push(car);
        return "Car added to stock list."
    } else {
        return "We cannot take anymore cars."
    }
}

Dealership.prototype.getManufacturerList = function(){
    return this.stock.map(car => car.getManufacturer()); // 'map' iterates through 'stock' and outputs a new array
}

Dealership.prototype.findCarsFromManufacturer = function(manufacturer){ // takes in a given manufacturer as input to search for
    return this.stock.filter(car => car.getManufacturer() === manufacturer); // output is a filtered array based on input manufacturer
};

Dealership.prototype.sumTotalStockValue = function(){
    return this.stock.reduce((runningTotal, car) => {
        return runningTotal + car.getPrice();
    }, 0);
};

Dealership.prototype.sellCar = function(car, customer) {
    if (this.stock.includes(car)) {
      this.stock = this.stock.filter(carInStock => carInStock !== car); // if car sold is not in stock, it is kept in the filtered array; if it is equal to car being sold, it is removed from the stock
      customer.buyCar(car, this);
      return "Car is sold!";
    } else {
      return "No such car in stock.";
    }
};


module.exports = Dealership;








