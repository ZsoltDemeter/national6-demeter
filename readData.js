console.log("Javascript - AJAX");

//console.log("before fetch");

document.getElementById("get-data").addEventListener("click",getData);

function getData(){
    fetch("https://simple-json-server-scit.herokuapp.com/posts").then(handleFetchResponse).then(useJSONResponse);
}

function handleFetchResponse(response){
    return response.json();
}

function useJSONResponse(index){
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

function renderArticle(articleData){
    const article = document.createElement("div");
    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");

    article.appendChild(articleTitle);
    article.appendChild(articleContent);

    articleListHtml.appendChild(article);

    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;

    fetch(`https://simple-json-server-scit.herokuapp.com/comments?postId=${articleData.postId}`);
    
    const commentsList = document.createElement("div");
    const comments = document.createElement("div");
    const user = document.createElement("h4");
    const userComment = document.createElement("p");

    article.appendChild(commentsList);
    commentsList.appendChild(comments);
    comments.appendChild(user);
    comments.appendChild(userComment);

    user.innerText = articleData.username;
    userComment.innerText = articleData.content;
          
}