//console.log('hello from render');
export function renderPost(post) {
    const div = document.createElement('div');
    div.classList.add('post');

    const h1 = document.createElement('h1');
    h1.textContent = `${post.title}`;

    const h4 = document.createElement('h4');
    h4.textContent = `status: ${post.feeling}`;

    const p = document.createElement('p');
    p.textContent = `${post.confession}`;

    const p2 = document.createElement('p');
    p2.textContent = `- anonymous developer`;
    p2.classList.add('signature');

    div.append(h1, h4, p, p2);
    return div;
}