(() => {
    const ready = callback => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            setTimeout(callback, 0);
        }
    };

    const main = () => {
        pagerize();
        complete();
    };

    const pagerize = () => {
        let page = new Page();
        const content = document.getElementsByClassName('content')[0];
        while (0 < content.childNodes.length) {
            page.appendChild(content.childNodes[0]);
        }
        content.appendChild(page.container);
    };

    const complete = () => {
        document.getElementsByClassName('hide')[0].classList.remove('hide');
    };

    class Page {
        constructor() {    
            this.container = this.createContainer();
            this.contentOutline = this.createContentOutline();
            this.container.appendChild(this.contentOutline);
            this.contentOutlineInner = this.createContentOutlineInner();
            this.contentOutline.appendChild(this.contentOutlineInner);
        }

        appendChild(element) {
            this.contentOutlineInner.appendChild(element);
        }

        createContainer() {
            const element = document.createElement('div');
            element.className = 'page';
            return element;
        }

        createContentOutline() {
            const element = document.createElement('div');
            element.className = 'content-outline';
            return element;
        }

        createContentOutlineInner() {
            const element = document.createElement('div');
            element.className = 'content-outline-inner';
            return element;
        }
    }

    ready(main);
})();
