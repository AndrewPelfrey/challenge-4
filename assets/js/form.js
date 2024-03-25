const switchModeButton = document.querySelector('#switch-mode');
const userForm = document.querySelector(`#userForm`);
const usernameInput = document.querySelector(`#username`);
const blogTitleInput = document.querySelector(`#blogTitle`);
const contentInput = document.querySelector(`#content`);
const userPosts = [];


switchModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        switchModeButton.textContent = 'Light Mode';
    } else {
        switchModeButton.textContent = 'Dark Mode';
    }
});


userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log(`username:`, usernameInput.value);
    console.log(`blogTitle:`, blogTitleInput.value);
    console.log(`content:`, contentInput.value);
    
    if (!usernameInput.value || !blogTitleInput.value || !contentInput.value) {
        alert('Please complete the form.');
        return;
    }
    const newPost = {
        username: usernameInput.value,
        blogTitle: blogTitleInput.value,
        content: contentInput.value,
    }

    userPosts.push(newPost);

    localStorage.setItem(`userPosts`, JSON.stringify(userPosts));
    
    window.location.href = "./blog.html";
});
