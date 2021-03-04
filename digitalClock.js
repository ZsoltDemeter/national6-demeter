console.log("Digital Cloack");

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsParagraph = document.querySelectorAll(".seconds p");
let minutesParagraph = document.querySelectorAll(".minutes p");
let hoursParagraph = document.querySelectorAll(".hours p");

let varTimer;
let start = false;

document.getElementById("start").addEventListener("click",function(){
    if(!start){
        varTimer = setInterval(myTimer,400);
    }
    start = true;
})

document.getElementById("stop").addEventListener("click",function(){
    clearInterval(varTimer);
    start = false;
})

document.getElementById("reset").addEventListener("click",function(){
    start = false;
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
    
    let savedHours = document.createElement("p");
    let savedMinutes = document.createElement("p");
    let savedSeconds = document.createElement("p");

    const savedTime = document.createElement("div");
    document.querySelector(".saved-times").appendChild(savedTime);

    savedTime.appendChild(savedHours);
    savedTime.appendChild(savedMinutes);
    savedTime.appendChild(savedSeconds);

    savedHoursString = hours +"";
    savedMinutesString = minutes +"";
    if(seconds === 0){
        savedSecondsString = "0";
    }else{
        savedSecondsString = (seconds - 1) + "";
    }
    
    if(savedSecondsString.split("").length < 2){
        savedSecondsString = "0"+savedSecondsString;
    }
    if(savedMinutesString.split("").length < 2){
        savedMinutesString = "0"+savedMinutesString;
    }
    if(savedHoursString.split("").length < 2){
        savedHoursString = "0"+savedHoursString;
    }

    savedHours.innerText = savedHoursString+":";
    savedMinutes.innerText = savedMinutesString+":";
    savedSeconds.innerText = savedSecondsString;

    // console.log(savedHoursString+":"+savedMinutesString+":"+savedSecondsString);
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




