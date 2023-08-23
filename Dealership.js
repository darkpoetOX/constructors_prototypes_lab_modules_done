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
    } else {
        return "We cannot take anymore cars"
    }
}

Dealership.prototype.getManufacturerList = function(){
    return this.stock.map(car => car.getManufacturer()); // 'map' iterates through 'stock' and outputs a new array
}

Dealership.prototype.findCarsFromManufacturer = function(manufacturer){ // takes in a given manufacturer as input to search for
    return this.stock.filter(car => car.getManufacturer() === manufacturer); // output is a filtered array based on input manufacturer
};

Dealership.prototype.sumTotalStocklValue = function(){
    return this.stock.reduce((runningTotal, car) => {
        runningTotal + car.getPrice();
    }, 0);
};

module.exports = Dealership;








