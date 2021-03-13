console.log("Javascript - AJAX");

//console.log("before fetch");

document.getElementById("get-data").addEventListener("click",getData);

function getData(){
    fetch("https://simple-json-server-scit.herokuapp.com/posts").then(handleFetchResponse).then(renderArticles);
}

function handleFetchResponse(response){
    return response.json();
}

function renderArticles(articleList){
    articleListHtml.innerText = "";
    for(const articleData of articleList){
        console.log(articleData);
        renderArticle(articleData);
    }
}
const allComments = document.getElementsByClassName("comment-list");
const articleListHtml = document.querySelector(".article-list");

function renderArticle(articleData){
    const article = document.createElement("div");
    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");
    const commentList = document.createElement("div");
    commentList.classList.add("comment-list");

    articleListHtml.appendChild(article);

    article.appendChild(articleTitle);
    article.appendChild(articleContent);
    article.appendChild(commentList);


    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;

    fetch(`https://simple-json-server-scit.herokuapp.com/comments?postId=${articleData.id}`).then(handleFetchResponse).then(renderComments);
}

function renderComments(commentData){
    for(const comment of commentData){
        renderComment(comment);
        console.log(commentData);
    }
}

function renderComment(commentData){
    const comments = document.createElement("div");
    comments.classList.add("comment");
    const user = document.createElement("h4");
    user.classList.add("comment-user");
    const userComment = document.createElement("p");
    userComment.classList.add("comment-content");

    allComments[commentData.postId].appendChild(comments);
    comments.appendChild(user);
    comments.appendChild(userComment);

    user.innerText = commentData.username;
    userComment.innerText = commentData.content;
      
}