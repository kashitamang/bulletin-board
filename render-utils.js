//console.log('hello from render');
export function renderPost(post) {
    const div = document.createElement('div');
    div.classList.add('post');

    const h1 = document.createElement('h1');
    h1.textContent = `${post.title}`;

    const h3 = document.createElement('h3');
    h3.textContent = `because im feeling ${post.feeling}`;

    const p = document.createElement('p');
    p.textContent = `${post.confession}`;

    div.append(h1, h3, p);
    return div;
}