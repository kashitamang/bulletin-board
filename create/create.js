import { createNewPost, checkAuth } from '../fetch-utils.js';

const createForm = document.getElementById('create-form');

checkAuth();
//console.log(createForm);

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    //console.log({ title: data.get('title'), feeling: data.get('feeling'), confession: data.get('confession') });
    const newPost = {
        title: data.get('title'),
        feeling: data.get('feeling'),
        confession: data.get('confession'),
    };
    const resp = await createNewPost(newPost);
    console.log(resp);
    location.replace('../index.html');
});