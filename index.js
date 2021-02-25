console.log("Javascript - Async Programming");

document.addEventListener("click",onClick);

let counter = 0;
function onClick(){
    console.log("just a click in the app");
    counter++;
    console.log("counter " + counter);
}

//the function is a anonymus function
setTimeout(function (){
    console.log("this is a code ran after 2 seconds");
}, 2000);

//this is similar to:
setTimeout(setTimeoutFunction, 2000);

function setTimeoutFunction(){
    console.log("this is a code ran after 2 seconds" + "setTimeoutFunction");
}


setInterval(function(){
    console.log("ping")
}, 1000);