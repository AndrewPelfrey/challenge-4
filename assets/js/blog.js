const switchModeButton = document.querySelector('#switch-mode');

//Got help online with this function, was struggling to get it to work on my own
switchModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        switchModeButton.textContent = 'Light Mode';
    } else {
        switchModeButton.textContent = 'Dark Mode';
    }
});

const backButton = document.querySelector(`#back-page`);

backButton.addEventListener(`click`, function(){
    window.location.href = "./index.html"
})
//found the DOMContentLoaded online, only way my function would work
document.addEventListener('DOMContentLoaded', function() {
   
const getUserPosts = JSON.parse(localStorage.getItem(`userPosts`));
console.log(getUserPosts);

const userPosts = document.querySelector(`#userPosts`);

    getUserPosts.forEach(function(post) {

        const newPost = document.createElement(`div`);
        newPost.classList.add(`post`);
        newPost.style.border = '3px solid black';
        newPost.style.marginBottom = '10px';

        const usernamePost = document.createElement(`p`);
        usernamePost.textContent =`Posted by: ${post.username}`;
        usernamePost.setAttribute(`class`, `userUsernamePost`);

        const titlePost = document.createElement(`h2`);
        titlePost.textContent =`${post.blogTitle}`; 
        titlePost.setAttribute(`class`, `userTitlePost`);

        const contentPost = document.createElement(`p`);
        contentPost.textContent =`${post.content}`;
        contentPost.setAttribute(`class`, `userContentPost`);

        newPost.appendChild(usernamePost);
        newPost.appendChild(titlePost);
        newPost.appendChild(contentPost);

        userPosts.appendChild(newPost);
    });
});
// function init() {
//     newPost();
// }
// init();

