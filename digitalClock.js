console.log("Javascript - Digital Clock");

let seconds = 0;
let minutes = 0;
let hours = 0;
const secondParagraphs = document.querySelectorAll(".seconds p");
const minutesParagraphs = document.querySelectorAll(".minutes p");
const hoursParagraphs = document.querySelectorAll(".hours p");  



setInterval(function(){

    renderDigits(seconds, secondParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours, hoursParagraphs);

//   const secondsString = seconds + "";
//   const secondsStringArray = secondsString.split("");
  
//   if(secondsStringArray.length === 2){
//     secondParagraphs[0].innerText = secondsStringArray[0];
//     secondParagraphs[1].innerText = secondsStringArray[1]; 
//   }else{
//       secondParagraphs[0].innerText = 0;
//       secondParagraphs[1].innerText = secondsStringArray[0];
//   }

//   const minutesString = minutes + "";
//   const minutesStringArray = minutesString.split("");
  
//   if(minutesStringArray.length === 2){
//     minutesParagraphs[0].innerText = minutesStringArray[0];
//     minutesParagraphs[1].innerText = minutesStringArray[1]; 
//   }else{
//       minutesParagraphs[0].innerText = 0;
//       minutesParagraphs[1].innerText = minutesStringArray[0];
//   }



  if(seconds === 59){
      seconds = 0;
      if(minutes === 59){
          minutes = 0;
          if(hours === 23){
              hours = 0;
          }else{
              hours++;
          }
      }else{
        minutes++;
      }
      
  }else{
      seconds++;
  }

}, 1000);


function renderDigits(nr, pList){
    const stringDigits = nr + "";
    const digitList = stringDigits.split("");

    if(digitList.length === 2){
        pList[0].innerText = digitList[0];
        pList[1].innerText = digitList[1];
    }else{
        pList[0].innerText = 0;
        pList[1].innerText = digitList[0];
    }
}


  