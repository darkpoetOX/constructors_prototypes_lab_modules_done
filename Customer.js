const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
  };


  Customer.prototype.buyCar = function(car, dealership) {
    if (this.wallet >= car.getPrice()) {
      this.wallet -= car.getPrice(); // take money from customer
      this.car = car;
      dealership.sellCar(car, this); // sellCar() is from Dealership, 'this' refers to the current customer object
      return "Car bought";
    } else {
      return "You need more money to buy this car.";
    }
  };
  
  module.exports = Customer;