(() => {
    const ready = callback => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            setTimeout(callback, 0);
        }
    };

    const main = () => {
        paperize();
        complete();
    };

    const paperize = () => {
        const page = createPage();
        const report = document.getElementsByClassName('report')[0];
        while (0 < report.childNodes.length) {
            page.appendChild(report.childNodes[0]);
        }
        report.appendChild(page);
    };

    const complete = () => {
        document.getElementsByClassName('hide')[0].classList.remove('hide');
    };

    const createPage = () => {
        const page = document.createElement('div');
        page.className = 'page';
        return page;
    };

    ready(main);
})();
