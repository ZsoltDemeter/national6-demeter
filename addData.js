console.log("Javascript - AJAX");
console.log("Crud Operation - Create");

document.getElementById("add-article-button").addEventListener("click",function(){

    const articleTitle = document.getElementById("article-title").value;
    console.log("articleTitle:", articleTitle);

    const articleContent = document.getElementById("article-content").value;
    console.log("articleContent:", articleContent);

    if(articleTitle && articleContent){ //if articleTitle and articleContent is not empty
        const payload = {
            title: articleTitle,
            content: articleContent
        };
    
        console.log("Payload:",payload);
        console.log("Payload Text:",JSON.stringify(payload));
    
        fetch("https://simple-json-server-scit.herokuapp.com/posts", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) // body data type must match "Content-Type" header
        }).then(getData);
    
    }
});


