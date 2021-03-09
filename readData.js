console.log("Javascript - AJAX");

//console.log("before fetch");

document.getElementById("get-data").addEventListener("click",function(){

    //console.log("before fetch");

    fetch("https://simple-json-server-scit.herokuapp.com/comments").then(handleFetchResponse).then(useJSONResponse);

    //console.log("after fetch");
});

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

    article.appendChild(articleTitle);
    article.appendChild(articleContent);

    articleListHtml.appendChild(article);

    articleTitle.innerText = data.title;
    articleContent.innerText = data.content;
}