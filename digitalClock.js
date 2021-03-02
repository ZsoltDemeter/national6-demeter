console.log("Digital Cloack");

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsParagraph = document.querySelectorAll(".seconds p");
let minutesParagraph = document.querySelectorAll(".minutes p");
let hoursParagraph = document.querySelectorAll(".hours p");

let varTimer;

document.getElementById("start").addEventListener("click",function(){
    varTimer = setInterval(myTimer,500);
})

document.getElementById("stop").addEventListener("click",function(){
    clearInterval(varTimer);
})

document.getElementById("reset").addEventListener("click",function(){
    clearInterval(varTimer);
    seconds = 0;
    minutes = 0;
    hours = 0;

    secondsParagraph[0].innerText = 0;
    secondsParagraph[1].innerText = 0;

    minutesParagraph[0].innerText = 0;
    minutesParagraph[1].innerText = 0;

    hoursParagraph[0].innerText = 0;
    hoursParagraph[1].innerText = 0;
})

document.getElementById("save").addEventListener("click",function(){
    clearInterval(varTimer);

    const savedTime = document.createElement("p");
    document.querySelector(".saved-times").appendChild(savedTime);

})


function renderDigits(nr,pList){
    const numberString = nr + "";
    const numberStringArray = numberString.split("");

    if(numberStringArray.length === 2){
        pList[0].innerText = numberStringArray[0];
        pList[1].innerText = numberStringArray[1];
    }else{
        pList[0].innerText = 0;
        pList[1].innerText = numberStringArray[0];
    }
}

function myTimer(){
        renderDigits(seconds,secondsParagraph);
        renderDigits(minutes,minutesParagraph);
        renderDigits(hours,hoursParagraph);
    
        seconds++;
        
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    
        if(hours === 24){
            hours = 0;
        }
}




