import { signupUser, redirectIfLoggedIn } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

//console.log(signUpPassword);

redirectIfLoggedIn();
//wire up sign in and sign up forms to supabase 
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    //redirect to home page on successful authorization
    if (user) {
        location.replace('../index.html');
    }
});

