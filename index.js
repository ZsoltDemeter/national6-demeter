console.log("Javascript OOP Game");

// object literal
//this comes from object class
const obj = {};

const a = new Object();
console.log(a);

//this comes from Array class
const b = [];


class Car {
    constructor(color){
        this.color = color;
    }

    startCar(){
        console.log("Start Car");
    }
}

class CarWithElectricWindows extends Car {
    openElectricWindow(windowNr){
        console.log("Opening window ",windowNr);
    }
}

const car1 = new Car("white");
const car2 = new CarWithElectricWindows("black");
car2.startCar();
car2.openElectricWindow(3);


class MyArray extends Array {
    printLenghtWithJoy(){
        console.log(this.length + " with joy");
    }
}

const MyArray1 = new MyArray();
MyArray1.push("abc");
MyArray1.push("def");
console.log(MyArray1);
MyArray1.printLenghtWithJoy();