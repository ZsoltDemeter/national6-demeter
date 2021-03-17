console.log("Javascript Object Oriented Programming")

const car = {
    nrOfWheels: 4,
    color: "red",
    engine: "diesel",
    runningEngine: false,
    turn: function(direction){
        if(this.runningEngine){
            console.log("The car is turning",direction);
        }else{
            console.log("The car is not running, turn the engine on");
        }
        
    },
    startEngine: function(){
        console.log("The engine is starting");
        this.runningEngine = true;
    },
};

car.turn("left");
car.startEngine();
car.turn("right");


//Classes

class Car{
    constructor(color,engine){
        this.__nrOfWheels = 4;
        this.color = color;
        this.engine = engine;
        this.runningEngine = false;
    }

    turn(direction){
        if(this.runningEngine){
            console.log("The car is turning",direction);
        }else{
            console.log("The car is not running, turn the engine on");
        }
    }
    startEngine(){
        console.log("The engine is starting");
        this.runningEngine = true;
    }
}

const car3 = new Car("yellow","hybrid");
const car4 = new Car("pink","petrol");

console.log(car3);
console.log(car3.color);

car3.color = "green";

document.getElementById("generate-car").addEventListener("click", () => {
    console.log("generate car");
    const newCar = new CarAuto();
})