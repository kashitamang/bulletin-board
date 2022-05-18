import { signupUser, redirectIfLoggedIn, signInUser } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');


//console.log(signInForm);

redirectIfLoggedIn();

//wire up sign in and sign up forms to supabase 
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    //console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    //redirect to home page on successful authorization
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    //console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signInUser(data.get('email'), data.get('password'));
    //redirect to other page on successful auth
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});