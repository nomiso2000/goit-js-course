"use strict";
class Car {
  static getSpecs({ maxSpeed, speed, isOn, distance, price } = {}) {
    console.log(
      ` 
            maxSpeed: ${maxSpeed} 
            speed: ${speed} 
            isOn: ${isOn} 
            distance: ${distance} 
            price ${price}`
    );
  }
  constructor(maxSpeed, _price, speed = 0, isOn = false, distance = 0) {
    this.maxSpeed = maxSpeed;
    this._price = _price;
    this.speed = speed;

    this.isOn = isOn;
    this.distance = distance;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
    return this.distance;
  }
}

const mustang = new Car(200, 2000);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
