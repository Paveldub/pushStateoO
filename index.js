const pageMap = {
    '#news': '.news-content',
    '#friends': '.friends-content',
    '#about': '.about-content',
    '#projects': '.projects-content'
}

let currentPage;
const list = document.querySelector('.list');

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

window.addEventListener('popstate', e => {
    if (e.state && e.state.page) {
        handlePage(e.state.page);
    }
});

function handlePage(page) {
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