const createForm = document.getElementById('create-form');

//console.log(createForm);

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    console.log({ title: data.get('title'), feeling: data.get('feeling'), confession: data.get('confession') });
});