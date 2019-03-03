const pageMap = {
    '#news': '.news-content',
    '#friends': '.friends-content',
    '#about': '.about-content',
    '#projects': '.projects-content'
}

let currentPage;
const list = document.querySelector('.list');
const content = document.querySelectorAll('.content');

document.addEventListener('DOMContentLoaded', e => {

    for (let contentItem of content) {
        if (contentItem.classList.contains('news-content')) {
            contentItem.classList.remove('hide');
        } else {
            contentItem.classList.add('hide');
        }
    }
});

window.addEventListener('popstate', e => {
    if (e.state && e.state.page) {
        handlePage(e.state.page);
    }
});

list.addEventListener('click', e => {

    let target = e.target;

    if (target.tagName === 'A') {
        e.preventDefault();

        const newPage = target.getAttribute('href');

        history.pushState({
            page: newPage
        }, 'new page');

        handlePage(newPage);
    }
});

function handlePage (page) {
    const pageName = pageMap[page];

    if (pageName) {
        const page = document.querySelector(pageName);

        if (page) {
            if (currentPage) {
                currentPage.classList.add('hide')
            }

            page.classList.remove('hide');
            currentPage = page;
        }
    }
}