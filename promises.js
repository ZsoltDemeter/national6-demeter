// Promises

function firstStep(number) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("End of first step");
            const value = 1;
            resolve(number + 1);
        }, 2000);
    });
  }

  function secondStep(param){
      console.log(param);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("End of second step");
            if(param % 2 === 1){
                reject("We want even param");
            }else{
                resolve(param / 2);
            }
            
        }, 1000);
    });
  }

  function thirdStep(finalValue){
    setTimeout(() => {
        console.log("End of third step");
        console.log("Final Value", finalValue);
    }, 500);
  }

  firstStep(2).
  then(secondStep).
  then(thirdStep).
  catch((error) => {
      alert(`Promise chain has the following error: ${error}`);
  });

  //fetch example

  fetch("https://simple-json-server-scit.herokuapp.com/posts")
  .then((response) => { return response.json()})
  .then((json) => {console.log(json)})
  .catch((error) => {console.log(error)});