console.log("Javascript - Local Storage");


if(!localStorage.getItem("name") || !localStorage.getItem("password")){
  
        window.location= "/login.html";
    }


document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    window.location = "/"; //refresh the page, moves to location:root
});