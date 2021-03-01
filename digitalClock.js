console.log("Digital Cloack");

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsParagraph = document.querySelectorAll(".seconds p");
let minutesParagraph = document.querySelectorAll(".minutes p");
let hoursParagraph = document.querySelectorAll(".hours p");

setInterval(function(){

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

},500);

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



