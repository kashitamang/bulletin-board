// import functions and grab DOM elements
import { getUser, logout, checkAuth } from './fetch-utils.js';

const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create-button');

//console.log(createButton);
// let state
// set event listeners 
//checkAuth();

window.addEventListener('load', async () =>{
    const user = await getUser();
//logout button still not appearing!!!!!!!!
  // get user input
  // use user input to update state 
    if (user) {
        authButton.addEventListener('click', logout);
          // update DOM to reflect the new state
        authButton.texContent = 'logout';
    } else {
        authButton.addEventListener('click', () => {
            location.replace('/auth/index.html');
        });
        authButton.textContent = 'login';
          // update DOM to reflect the new state
    }
    
    //add createButton event listener here...
});



