console.log("Spaceship Generator Homework");

let selected = false;
let lastSpaceship = false;
let spaceship;
let lastElement;

const spaceshipList = document.getElementById("spaceship-list");
const imageArray = ["Images/blue-spaceship.png","Images/boring-spaceship.png","Images/green-spaceship.png","Images/orange-spaceship.png","Images/pewpew-spaceship.png","Images/red-spaceship.png","Images/x-wing.png"];

document.getElementById("generate-starship").addEventListener("click", ()=>{
    spaceship = new Spaceship();
    // console.log(lastElement);
});

class Spaceship{
    constructor(){
       this.generateHtmlRef();
       this.setSelected();
       this.setMoveSpaceship();
       lastElement = document.getElementById("spaceship-list").lastElementChild;
    }

    generateHtmlRef(){
        this.ref = document.createElement("img");
        this.ref.src = imageArray[Math.floor(Math.random() * imageArray.length)];
        this.ref.classList.add("spaceship");
        spaceshipList.appendChild(this.ref);
    }

    setSelected(){  
        this.ref.addEventListener("click", () =>{
            this.selected = true;
        })
    }

    setMoveSpaceship(){
        document.addEventListener("keydown",(event)=>{
                if(this.ref.src === lastElement){ ////check here
                    this.moveSpaceship(event.key);
                }
        });
    }
    
    moveSpaceship(action){
        if(action === "ArrowRight"){
            this.horizontal += 5;
            this.ref.style.marginLeft = `${this.horizontal}px`;
        }else if(action === "ArrowLeft"){
            this.horizontal -= 5;
            this.ref.style.marginLeft = `${this.horizontal}px`;
        }else if(action === "ArrowUp"){
            this.vertical -= 5;
            this.ref.style.marginTop = `${this.vertical}px`;
        }else if(action === "ArrowDown"){
            this.vertical += 5;
            this.ref.style.marginTop = `${this.vertical}px`;
        }
    }

}