// import functions and grab DOM elements
import { getUser } from './fetch-utils.js';

const bulletin = document.getElementById('bulletin-board');
const authButton = document.getElementById('auth-button');
const createButton = document.getElementById('create-button');

//console.log(createButton);
// let state

window.addEventListener('load', async () =>{
    const user = await getUser();

    if (user) {
        authButton.addEventListener('click', logout);
        authButton.texContent = 'logout';
    } else {
        authButton.addEventListener('click', () => {
            location.replace('/auth/index.html');
        });
        authButton.textContent = 'login';
    }
    //add createButton event listener here...
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
