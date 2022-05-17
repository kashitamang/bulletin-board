// import functions and grab DOM elements
import { getUser, logout } from './fetch-utils.js';

const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create-button');

//console.log(createButton);
// let state
// set event listeners 

window.addEventListener('load', async () =>{
    const user = await getUser();
//logout button still not appearing!!!!!!!!
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
    }
    
    //add createButton event listener here...
});



