function main() {
    render_blog_menu();
    
    const hash = new URL(location.href).hash;
    if (hash.length > 0) {
        show_page(`${hash.substring(1)}`);
    }
}

function render_blog_menu() {
    fetch(`blog/pages.json`)
    .then((response) => response.json())
    .then((pages) => {
        const ul = document.createElement(`ul`);
        for (const i in pages) {
            const li = document.createElement(`li`);
            const a = document.createElement(`a`);
            a.setAttribute('href', `#blog/${pages[i]}`);
            a.setAttribute('onclick', 'show_page(`blog/${this.text}`)');
            a.innerHTML = pages[i];
            li.appendChild(a);
            ul.appendChild(li);
        }
        document.querySelector(`#menu`).appendChild(ul);
    });
}

function show_page(page) {
    fetch(`${page}`)
    .then((response) => response.text())
    .then((page) => {
        const converter = new showdown.Converter();
        converter.setOption('strikethrough', true);
        document.querySelector(`#content`).innerHTML = converter.makeHtml(page);
    });
}