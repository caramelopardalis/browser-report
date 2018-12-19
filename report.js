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
        const contentContainer = document.getElementsByClassName('br-content')[0];
        const contents = Array.prototype.slice.call(contentContainer.children);
        contentContainer.innerHTML = '';

        let page = new Page();
        contentContainer.appendChild(page.container);
        for (let i = 0; i < contents.length; i++) {
            const content = contents[i];
            page.appendChild(content);

            let contentText;
            let trimedCount = 0;
            while (page.getHeight() < page.getContentHeight()) {
                const valueElement = content.getElementsByClassName('br-value')[0];
                if (contentText === undefined) {
                    contentText = valueElement.textContent;
                }
                valueElement.textContent = valueElement.textContent.substring(0, valueElement.textContent.length - 1);
                ++trimedCount;
            }

            if (0 < trimedCount) {
                // break page because content overflow 
                const clonedContent = content.cloneNode(true);
                clonedContent.getElementsByClassName('br-value')[0].textContent = contentText.substring(contentText.length - trimedCount);
                contents.splice(i + 1, 0, clonedContent);
                page = new Page();
                contentContainer.appendChild(page.container);
            }
        } 
    };

    const complete = () => {
        document.getElementsByClassName('br-hide')[0].classList.remove('br-hide');
    };

    const getLayout = (element) => {
        return element.getBoundingClientRect();
    };

    class Page {
        constructor() {    
            this.container = this.createContainer();
            this.containerInner = this.createContainerInner();
            this.container.appendChild(this.containerInner);

            this.contentOutline = this.createContentOutline();
            this.containerInner.appendChild(this.contentOutline);
            this.contentOutlineInner = this.createContentOutlineInner();
            this.contentOutline.appendChild(this.contentOutlineInner);
        }

        appendChild(element) {
            this.contentOutlineInner.appendChild(element);
        }

        createContainer() {
            const element = document.createElement('div');
            element.className = 'br-page';
            return element;
        }

        createContainerInner() {
            const element = document.createElement('div');
            element.className = 'br-page-inner';
            return element;
        }

        createContentOutline() {
            const element = document.createElement('div');
            element.className = 'br-content-outline';
            return element;
        }

        createContentOutlineInner() {
            const element = document.createElement('div');
            element.className = 'br-content-outline-inner';
            return element;
        }

        getHeight() {
            return getLayout(this.containerInner).height;
        }

        getContentHeight() {
            return getLayout(this.contentOutlineInner).height;
        }
    }

    ready(main);
})();
