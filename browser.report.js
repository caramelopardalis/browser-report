((global) => {
    const main = () => {
        pagerize()
        complete()
    }

    const pagerize = () => {
        const contentContainer = document.getElementsByClassName('br-content')[0]

        const pagesContainer = document.createElement('div')
        pagesContainer.classList.add('br-pages-container')
        document.body.appendChild(pagesContainer)

        let page = new Page()
        pagesContainer.appendChild(page.container)

        const split = (currentElement) => {
            if (!currentElement.classList.contains('br-grid-data')) {
                currentElement.parentElement.removeChild(currentElement)
                return currentElement
            }

            let original
            let trimedCount = 0
            while (page.getHeight() < page.getContentHeight()) {
                if (currentElement.textContent.length === 0) {
                    currentElement.textContent = original
                    currentElement.parentElement.removeChild(currentElement)
                    return currentElement
                }

                if (original === undefined) {
                    original = currentElement.textContent
                }

                currentElement.textContent = currentElement.textContent.substring(0, currentElement.textContent.length - 1)
                ++trimedCount
            }

            const remaining = currentElement.closest('.br-group').cloneNode(true)
            remaining.querySelector('[data-br-id="' + currentElement.getAttribute('data-br-id') + '"]').textContent = original.substring(original.length - trimedCount)
            return remaining
        }

        walkDescendant(contentContainer, (currentElement) => {
            currentElement.setAttribute('data-br-id', uuid())

            const parent = page.container.querySelector('[data-br-id="' + currentElement.parentElement.getAttribute('data-br-id') + '"]')
            const clonedCurrentElement = currentElement.cloneNode(false)
            for (let i = 0; i < currentElement.childNodes.length; i++) {
                if (currentElement.childNodes[i].nodeType === Node.TEXT_NODE) {
                    clonedCurrentElement.appendChild(currentElement.childNodes[i])
                }
            }
            if (!parent) {
                page.appendChild(clonedCurrentElement)
            } else {
                parent.appendChild(clonedCurrentElement)
            }

            if (page.getHeight() < page.getContentHeight()) {
                const pushedElement = split(clonedCurrentElement)
                page = new Page()
                pagesContainer.appendChild(page.container)
                page.appendChild(pushedElement)
            }
        })
    }

    const complete = () => {
        const content = document.getElementsByClassName('br-content')[0]
        content.parentElement.removeChild(content)
    }

    const walkDescendant = (root, elementHandler) => {
        let currentElement = root
        let processCount = 0
        const walk = () => {
            if (currentElement !== root) {
                processCurrentElement()
            }

            if (0 < currentElement.children.length) {
                currentElement = currentElement.children[0]
            } else if (currentElement.nextElementSibling) {
                currentElement = currentElement.nextElementSibling
            } else {
                let element = currentElement
                while (element.parentElement) {
                    if (element.parentElement === root) {
                        return;
                    }
                    if (element.parentElement.nextElementSibling) {
                        break
                    }
                    element = element.parentElement
                }
                currentElement = element.parentElement.nextElementSibling
            }

            if (1 === processCount) {
                processCount = 0
                setTimeout(walk, 0)
            } else {
                walk()
            }
        }
        const processCurrentElement = () => {
            ++processCount

            elementHandler(currentElement)
        }
        walk()
    }
    
    const getLayout = (element) => {
        return element.getBoundingClientRect()
    }

    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
          return v.toString(16)
        })
    }
    
	const loadScripts = (urls, callback) => {
		if (urls.length) {
			loadScript(urls[0], () => {
				urls = urls.slice(1)
				loadScripts(urls, callback)
			})
		} else {
			callback()
		}
	}

	const loadScript = (url, callback) => {
		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.async = false
		script.src = url

		if (script.readyState) {
			script.onreadystatechange = () => {
				if (script.readyState === 'loaded' || script.readyState === 'complete') {
					script.onreadystatechange = null
					callback()
				}
			}
		} else {
			script.onload = () => {
				callback()
			}
		}
		document.getElementsByTagName('body')[0].appendChild(script)
    }
    
    class Waiter {
        constructor(callback) {
            this.callback = callback
            this.counter = 0
        }

        wait(func) {
            --this.counter
            func()
        }
        
        ok() {
            setTimeout(() => {
                this.counter++
                if (this.counter === 0) {
                    this.callback()
                }
            }, 0)
        }
    }

    class Page {
        constructor() {    
            this.container = this.createContainer()
            this.containerInner = this.createContainerInner()
            this.container.appendChild(this.containerInner)

            this.contentOutline = this.createContentOutline()
            this.containerInner.appendChild(this.contentOutline)
            this.contentOutlineInner = this.createContentOutlineInner()
            this.contentOutline.appendChild(this.contentOutlineInner)
        }

        appendChild(element) {
            this.contentOutlineInner.appendChild(element)
        }

        createContainer() {
            const element = document.createElement('div')
            element.className = 'br-page'
            return element
        }

        createContainerInner() {
            const element = document.createElement('div')
            element.className = 'br-page-inner'
            return element
        }

        createContentOutline() {
            const element = document.createElement('div')
            element.className = 'br-content-outline'
            return element
        }

        createContentOutlineInner() {
            const element = document.createElement('div')
            element.className = 'br-content-outline-inner'
            return element
        }

        getHeight() {
            return getLayout(this.containerInner).height
        }

        getContentHeight() {
            return getLayout(this.contentOutlineInner).height
        }
    }

    const waiter = new Waiter(main)

    waiter.wait(() => {
        loadScripts([
            'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
        ], () => {
            WebFont.load({
                google: {
                    families: [
                        'Noto Sans JP'
                    ]
                },
                active() {
                    waiter.ok()
                }
            })
        })
    })

    waiter.wait(() => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                waiter.ok()
            })
        } else {
            setTimeout(() => {
                waiter.ok()
            }, 0)
        }
    })
})(this)
