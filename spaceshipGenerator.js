console.log("Spaceship Generator Homework");

let spaceship;
let spaceshipArray =[];

const spaceshipList = document.getElementById("spaceship-list");
const imageArray = ["Images/blue-spaceship.png","Images/boring-spaceship.png","Images/green-spaceship.png","Images/orange-spaceship.png","Images/pewpew-spaceship.png","Images/red-spaceship.png","Images/x-wing.png"];

document.getElementById("generate-starship").addEventListener("click", ()=>{
    spaceship = new Spaceship();
    spaceshipArray.push(spaceship);
    
    for (const spaceship of spaceshipArray) {
        spaceship.selected = false;
        spaceshipArray[spaceshipArray.length - 1].selected = true;
    }
});

class Spaceship{
    constructor(){
       this.selected = false;
       this.x = 0;
       this.y = 0;
       this.generateHtmlRef();
       this.setSelected();
       this.setMoveSpaceship();
    }

    move(x, y) {
        this.x = x;
        this.y = y;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
      }

    generateHtmlRef(){
        this.ref = document.createElement("img");
        this.ref.src = imageArray[Math.floor(Math.random() * imageArray.length)];
        this.ref.classList.add("spaceship");
        spaceshipList.appendChild(this.ref);
    }

    setSelected(){  
        this.ref.addEventListener("click", () =>{
            for (const spaceship of spaceshipArray) {
                spaceship.selected = false;
                // spaceship.enabled = false;
            }
            this.selected = true;
        })
    }

    setMoveSpaceship(){
        document.addEventListener("keydown",(event)=>{
               if(this.selected === true) this.moveSpaceship(event.key);        
        });
    }
    
    moveSpaceship(action){
        if(action === "ArrowRight"){
            this.move(this.x + 5,this.y);
        }else if(action === "ArrowLeft"){
            this.move(this.x - 5,this.y);
        }else if(action === "ArrowUp"){
            this.move(this.x,this.y - 5);
        }else if(action === "ArrowDown"){
            this.move(this.x,this.y + 5);
        }
    }
}

