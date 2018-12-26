((global) => {
    const WALKER_ASYNC_PROCESS_COUNT = 1
    const SHRINK_ASYNC_PROCESS_COUNT = 10

    const main = async () => {
        await pagerize()
    }

    const pagerize = async () => {
        const contentContainer = document.getElementsByClassName('br-content')[0]

        addMetadata(contentContainer)

        const pagesContainer = document.createElement('div')
        pagesContainer.classList.add('br-pages-container')
        document.body.appendChild(pagesContainer)

        let page = new Page()
        pagesContainer.appendChild(page.container)

        let shrinkCount = 0

        const pageBreakIfOverflowed = async (clonedCurrentElement, currentElement) => {
            if (page.getContentHeight() <= page.getHeight()) {
                return
            }

            if (!clonedCurrentElement.classList.contains('br-grid-data')) {
                moveToNextPage(clonedCurrentElement)
                return
            }

            const originalNearestGroup = currentElement.closest('.br-group')
            // TODO check originalNearestGroup null
            const clonedOriginalNearestGroup = originalNearestGroup.cloneNode(true)

            // replace the nearest group in page to the original nearest group (because next siblings not yet copied)
            const insertedNearestGroup = page.container.querySelector(':scope [data-br-id="' + clonedOriginalNearestGroup.getAttribute('data-br-id') + '"]')
            insertedNearestGroup.parentElement.insertBefore(clonedOriginalNearestGroup, insertedNearestGroup)
            insertedNearestGroup.parentElement.removeChild(insertedNearestGroup)

            while (page.getHeight() < page.getContentHeight()) {
                while (page.getHeight() < page.getContentHeight()) {
                    if (++shrinkCount === SHRINK_ASYNC_PROCESS_COUNT) {
                        shrinkCount = 0
                        await shrink(currentElement)
                    } else {
                        shrinkSync(currentElement)
                    }

                    if (!hasData(currentElement)) {
                        // move the group to next page
                        for (const datumInNearestGroup of dataInNearestGroup) {
                            datumInNearestGroup.setAttribute('br-removed-count', 0)
                            contentContainer.querySelector(':scope [data-br-id="' + datumInNearestGroup.getAttribute('data-br-id') + '"]').setAttribute('data-br-removed-count', 0)
                        }
                        dataInNearestGroup.parentElement.removeChild(dataInNearestGroup)
                        copyGroupToNextPage(currentElement)
                    }
                }

                const nearestGroup = page.container.querySelector(':scope [data-br-id="' + originalNearestGroup.getAttribute('data-br-id') + '"]')
                const dataInNearestGroup = nearestGroup.querySelectorAll(':scope .br-grid-data')
                for (const datumInNearestGroup of dataInNearestGroup) {
                    if (0 < parseInt(datumInNearestGroup.getAttribute('data-br-removed-count'))) {
                        copyGroupToNextPage(currentElement)

                        const newNearestGroup = page.container.querySelector(':scope [data-br-id="' + originalNearestGroup.getAttribute('data-br-id') + '"]')
                        const newDataInNearestGroup = newNearestGroup.querySelectorAll(':scope .br-grid-data')
                        for (const newDatumInNearestGroup of newDataInNearestGroup) {
                            const removedCount = parseInt(newDatumInNearestGroup.getAttribute('data-br-removed-count'))
                            const startIndex = parseInt(newDatumInNearestGroup.getAttribute('data-br-start-index'))
                            const originalText = newDatumInNearestGroup.getAttribute('data-br-original-text')
                            let newStartIndex = startIndex === 0 ? originalText.length - removedCount : startIndex + (originalText.length - startIndex - removedCount)

                            newDatumInNearestGroup.setAttribute('data-br-removed-count', 0)
                            contentContainer.querySelector(':scope [data-br-id="' + newDatumInNearestGroup.getAttribute('data-br-id') + '"]').setAttribute('data-br-removed-count', 0)

                            if (removedCount === 0) {
                                newStartIndex = 0
                            } else if (originalText.length <= newStartIndex || newStartIndex < 0) {
                                newStartIndex = originalText.length
                            }

                            newDatumInNearestGroup.setAttribute('data-br-start-index', newStartIndex)
                            contentContainer.querySelector(':scope [data-br-id="' + newDatumInNearestGroup.getAttribute('data-br-id') + '"]').setAttribute('data-br-start-index', newStartIndex)
                            newDatumInNearestGroup.textContent = originalText.substring(newStartIndex)
                        }
                        
                        break
                    }
                }
            }
        }

        const shrink = async (currentElement) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    shrinkSync(currentElement)
                    resolve()
                }, 0)
            })
        }

        const shrinkSync = (currentElement) => {
            const originalNearestGroup = currentElement.closest('.br-group')
            const nearestGroup = page.container.querySelector(':scope [data-br-id="' + originalNearestGroup.getAttribute('data-br-id') + '"]')
            const dataInNearestGroup = nearestGroup.querySelectorAll(':scope .br-grid-data')

            // TODO compare real height instead of characters count
            let mostBiggestCharacters = 0
            let mostBiggestElement
            for (const datumInNearestGroup of dataInNearestGroup) {
                const characters = datumInNearestGroup.textContent.length 
                if (mostBiggestCharacters < characters) {
                    mostBiggestCharacters = characters
                    mostBiggestElement = datumInNearestGroup
                }
            }
            if (mostBiggestElement) {
                const removedCount = parseInt(mostBiggestElement.getAttribute('data-br-removed-count')) + 1
                mostBiggestElement.setAttribute('data-br-removed-count', removedCount)
                contentContainer.querySelector(':scope [data-br-id="' + mostBiggestElement.getAttribute('data-br-id') + '"]').setAttribute('data-br-removed-count', removedCount)
                mostBiggestElement.textContent = mostBiggestElement.textContent.substring(0, mostBiggestElement.textContent.length - 1)
            }
        }

        const hasData = (currentElement) => {
            const originalNearestGroup = currentElement.closest('.br-group')
            const nearestGroup = page.container.querySelector(':scope [data-br-id="' + originalNearestGroup.getAttribute('data-br-id') + '"]')
            const dataInNearestGroup = nearestGroup.querySelectorAll(':scope .br-grid-data')

            let hasText = false
            for (const datumInNearestGroup of dataInNearestGroup) {
                if (0 < datumInNearestGroup.textContent.length) {
                    hasText = true
                    break
                }
            }

            return hasText
        }

        const moveToNextPage = (element) => {
            element.parentElement.removeChild(element)
            page = new Page()
            pagesContainer.appendChild(page.container)
            page.appendChild(element)
        }

        const copyGroupToNextPage = (currentElement) => {
            const ancestorGroups = []
            const ancestorGroupsIds = []
            let ancestorGroup = currentElement.closest('.br-group')
            while (ancestorGroup) {
                ancestorGroups.push(ancestorGroup)
                ancestorGroupsIds.push(ancestorGroup.getAttribute('data-br-id'))
                ancestorGroup = ancestorGroup.parentElement.closest('.br-group')
            }

            const clonedFarthestGroup = ancestorGroups[ancestorGroups.length - 1].cloneNode(true)

            const groupedGroups = clonedFarthestGroup.querySelectorAll(':scope .br-group')
            for (const groupedGroup of groupedGroups) {
                if (!ancestorGroupsIds.includes(groupedGroup.getAttribute('data-br-id'))) {
                    groupedGroup.parentElement.removeChild(groupedGroup)
                }
            }

            page = new Page()
            pagesContainer.appendChild(page.container)
            page.appendChild(clonedFarthestGroup)
        }

        await walkDescendant(contentContainer, async (currentElement) => {
            const parent = page.container.querySelector(':scope [data-br-id="' + currentElement.parentElement.getAttribute('data-br-id') + '"]')
            const clonedCurrentElement = currentElement.cloneNode(false)
            for (let i = 0; i < currentElement.childNodes.length; i++) {
                if (currentElement.childNodes[i].nodeType === Node.TEXT_NODE) {
                    clonedCurrentElement.appendChild(currentElement.childNodes[i].cloneNode(false))
                }
            }
            if (!parent) {
                if (!page.container.querySelector(':scope [data-br-id="' + clonedCurrentElement.getAttribute('data-br-id') + '"]')) {
                    page.appendChild(clonedCurrentElement)
                }
            } else {
                if (!parent.querySelector(':scope [data-br-id="' + clonedCurrentElement.getAttribute('data-br-id') + '"]')) {
                    parent.appendChild(clonedCurrentElement)
                }
            }

            await pageBreakIfOverflowed(clonedCurrentElement, currentElement)
        }, complete)
    }

    const complete = async () => {
        const content = document.getElementsByClassName('br-content')[0]
        content.parentElement.removeChild(content)

        await hideIndicator()
    }

    const hideIndicator = async () => {
        const container = document.querySelector('.br-indicator-container')
        if (container) {
            document.body.removeChild(container)
        }
    }

    const addMetadata = (contentContainer) => {
        const originals = contentContainer.querySelectorAll(':scope *')
        for (const original of originals) {
            original.setAttribute('data-br-id', uuid())
        }
        const data = contentContainer.querySelectorAll(':scope .br-grid-data')
        for (const datum of data) {
            datum.setAttribute('data-br-start-index', 0)
            datum.setAttribute('data-br-removed-count', 0)
            datum.setAttribute('data-br-original-text', datum.textContent)
        }
    }

    const walkDescendant = async (root, elementHandler, completeHandler) => {
        let currentElement = root
        let processCount = 0
        const walk = async () => {
            if (currentElement !== root) {
                await processCurrentElement()
            }

            if (0 < currentElement.children.length) {
                currentElement = currentElement.children[0]
            } else if (currentElement.nextElementSibling) {
                currentElement = currentElement.nextElementSibling
            } else {
                let element = currentElement
                while (element.parentElement) {
                    if (element.parentElement === root) {
                        if (completeHandler) {
                            await completeHandler()
                        }
                        return;
                    }
                    if (element.parentElement.nextElementSibling) {
                        break
                    }
                    element = element.parentElement
                }
                currentElement = element.parentElement.nextElementSibling
            }

            if (WALKER_ASYNC_PROCESS_COUNT === processCount) {
                processCount = 0
                setTimeout(walk, 0)
            } else {
                walk()
            }
        }
        const processCurrentElement = async () => {
            ++processCount

            await elementHandler(currentElement)
        }
        await walk()
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