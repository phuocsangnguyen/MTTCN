// class ko phai la object
// class la teamplate de tao object
class Car {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    getName = () => {
        return this.name
    }

    getColor = () => {
        return this.color
    }
}

class SuperCar extends Car {

  constructor(name, color, signature)  
    {
        super(name, color)
        this.signature = signature
    }
}
const bwm = new Car('BWM', 'Black')
const toyota = new Car('Toyota', 'Red')
const ferrari = new SuperCar ('Ferrari', 'Red', 'Ferrari Signature')
// console.log(JSON.stringify(bwm))
// console.log(JSON.stringify(toyota))
console.log(ferrari)