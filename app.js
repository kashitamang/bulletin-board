// import functions and grab DOM elements
import { getUser, logout, getPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('auth-button');
const newPost = document.getElementById('new-post-button');

//console.log(createButton);
// let state
// set event listeners 

window.addEventListener('load', async () =>{
    const user = await getUser();
  // get user input
  // use user input to update state 
    if (user) {
        authButton.textContent = 'logout';
        authButton.addEventListener('click', logout);
          // update DOM to reflect the new state
    } else {
        authButton.textContent = 'login';
        authButton.addEventListener('click', () => {
            location.replace('/auth/index.html');
        });
          // update DOM to reflect the new state
        newPost.addEventListener('click', () => {
            location.replace('./create/index.html');
        });
    }
    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPost(post);
        bulletin.append(postDiv);
    }
    //add createButton event listener here...
});



