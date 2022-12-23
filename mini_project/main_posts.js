let url = new URL(location.href);
let posts = url.searchParams.get("post");

const infoDiv = document.getElementsByClassName('postDiv');

fetch(`https://jsonplaceholder.typicode.com/posts/${posts}`)
    .then(response => response.json())
    .then(posts => {
        for (const key in posts) {
            let div = document.createElement('div');
            div.innerHTML = `<b>${key}</b> : ${posts[key]}`;
            infoDiv[0].append(div);
        }
        });


const commentsDiv = document.getElementsByClassName('commentsDiv');


fetch(`https://jsonplaceholder.typicode.com/posts/${posts}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            let innerDiv = document.createElement('div');
            innerDiv.innerHTML = `<b>${'Comment'}</b> :  ${comment.body}`;
            innerDiv.classList.add('innerComments');
            commentsDiv[0].appendChild(innerDiv);
        }
    });





