console.log("Javascript - AJAX");
console.log("Crud Operation - Read")

//console.log("before fetch");

document.getElementById("get-data").addEventListener("click",getData);

function getData(){
    fetch("https://simple-json-server-scit.herokuapp.com/posts").then(handleFetchResponse).then(useJSONResponse);
}

function handleFetchResponse(response){
    //console.log("response",response);
    return response.json();
}

function useJSONResponse(index){
    //console.log(index);
    renderArticles(index);
}

function renderArticles(articleList){
    articleListHtml.innerText = "";
    for(const articleData of articleList){
        console.log(articleData);
        renderArticle(articleData);
    }
}

const articleListHtml = document.querySelector(".article-list");

function renderArticle(data){
    const article = document.createElement("div");
    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");
    const removeButton = document.createElement("button");

    removeButton.addEventListener("click",function(){
        article.remove();
    });

    article.appendChild(articleTitle);
    article.appendChild(articleContent);
    article.appendChild(removeButton);

    articleListHtml.appendChild(article);

    articleTitle.innerText = data.title;
    articleContent.innerText = data.content;
    removeButton.innerText = "Remove";
}