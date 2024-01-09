const videoImagesData = [
    'https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/zRCSBlp0LjwClRXsjyDNYQ/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/14EMzw_K3xobvKcajf9fdQ/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/08RCyCOvu05COuc-qdDudQ/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/A_R7PS9DPKeHWxifN_JHFg/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/qxFrviRA_c3vX8rbFyv7jQ/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/tvE0uhklu2DR3IxVteCulA/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/Vu2O0LKNOF3Sw-S_QJUVLQ/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/1fwlz4xnbHHx9zTLODa_xw/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/OCdJtCx9e51TYxoG8aBJZQ/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/ynfGAYhMnc6Dygh6pj9xsw/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/qL-yBoKCFztx-kDyvIXlHw/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/gHMoyFnOUJLH6d0rSgyIbg/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/Qel4W8kSxvD_KV3HxyCaeA/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/9ewxNiQdC032DQcorTcsvA/756x425.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/e7lhfIFweEP0AEWANZymEQ/756x425.jpg',
]

const videoImagesDataCopy = JSON.parse(
    JSON.stringify(videoImagesData)
).reverse()

document.addEventListener('DOMContentLoaded', function () {
    const videoBlock = document.querySelector('.videos-block')
    const imagesContainers = document.querySelectorAll('ul')
    const overflowDisplay = document.querySelector('.overflow')
    const videoContainer = document.querySelector('.video-watch')
    const imagesOffset = 5
    const imageWidth = 398
    const imagesContainerWidth =
        videoImagesData.length * imageWidth + imagesOffset * imageWidth

    const moveSpeed = 0.85,
        hoverMoveSpeed = 0.6

    let positionFirstContainer = 0,
        positionSecondContainer = -150

    let moveContainersInterval = null,
        isMoveContainersActive = false

    let isOpenedVideo = false,
        openVideoTimeout = null,
        changeSizeTimeout = null

    let pixelsMoveFirst = moveSpeed,
        pixelsMoveSecond = moveSpeed * 1.3

    imagesContainers.forEach(
        (container) => (container.style.width = imagesContainerWidth + 'px')
    )

    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    if (!isMoveContainersActive) {
                        moveContainersInterval = startMoveContainersInterval()
                        isMoveContainersActive = true
                    }
                    imagesContainers[1].style.transform = `translateX(${positionSecondContainer}px)`
                } else {
                    if (isMoveContainersActive) {
                        clearInterval(moveContainersInterval)
                        isMoveContainersActive = false
                    }
                }
            })
        },
        { threshold: 0.5 }
    )

    observer.observe(videoBlock)

    const closeOverflow = () => {
        document.body.style.overflow = 'auto'
        overflowDisplay.style.display = 'none'
        overflowDisplay.style.opacity = '0'
        overflowDisplay.removeEventListener('click', closeVideo)
    }

    const showOverflow = () => {
        document.body.style.overflow = 'hidden'
        overflowDisplay.style.display = 'block'
        setTimeout(() => {
            overflowDisplay.style.opacity = '0.999'
        })
        overflowDisplay.addEventListener('click', closeVideo)
    }

    const closeVideo = () => {
        if (isOpenedVideo) {
            clearTimeout(openVideoTimeout)
            clearTimeout(changeSizeTimeout)
            isOpenedVideo = false
        }
        closeOverflow()
        videoContainer.classList.remove('video-watch_active')
        videoContainer.querySelector('.images-line_item')?.remove()
        videoContainer.querySelector('.video-watch_play')?.remove()
        if (!isMoveContainersActive) {
            moveContainersInterval = startMoveContainersInterval()
            isMoveContainersActive = true
        }
    }

    const openVideo = (
        event,
        videoSrc = 'https://www.youtube.com/embed/bd-KpqIyLUk'
    ) => {
        if (isMoveContainersActive) {
            clearInterval(moveContainersInterval)
            isMoveContainersActive = false
        }

        isOpenedVideo = true

        openVideoTimeout = setTimeout(() => {
            const iframe = document.createElement('iframe')
            iframe.src = videoSrc + '?autoplay=1'
            iframe.classList.add('video-watch_play')
            videoContainer.appendChild(iframe)
        }, 800)

        const parentRect =
            event.currentTarget.parentElement.getBoundingClientRect()

        const imageCopy = event.currentTarget.parentElement.cloneNode(true)
        imageCopy.style.margin = '0'
        imageCopy.classList.add('.image-line_item_active')
        imageCopy.querySelector('.image-line_item_button').remove()

        videoContainer.classList.add('video-watch_active')
        videoContainer.style.top = `${parentRect.top}px`
        videoContainer.style.left = `${parentRect.left}px`
        videoContainer.append(imageCopy)
        showOverflow()

        changeSizeTimeout = setTimeout(() => {
            videoContainer.style.top = `calc(50% - 212px)`
            videoContainer.style.left = `calc(50% - 378px)`
        })
    }

    const createImageElements = (images, container) => {
        return [...images, ...images.slice(0, imagesOffset)].map((image) => {
            const imageElement = document.createElement('li')
            const hoverElement = document.createElement('div')
            const itemButton = document.createElement('button')
            const playIcon = document.createElement('img')

            imageElement.classList.add('images-line_item')
            hoverElement.classList.add('image-line_item_hover')
            playIcon.src = './icons/play.svg'
            playIcon.alt = 'play'
            itemButton.classList.add('image-line_item_button')
            itemButton.textContent = 'Stream now'
            itemButton.append(playIcon)
            itemButton.addEventListener('click', openVideo)
            imageElement.appendChild(hoverElement)
            imageElement.appendChild(itemButton)

            imageElement.style.backgroundImage = `url(${image})`
            container.style.transform = `translateX(${positionFirstContainer}px)`
            return imageElement
        })
    }

    const imagesFirst = createImageElements(
        videoImagesData,
        imagesContainers[0]
    )

    imagesFirst.forEach((imageElement) => {
        imagesContainers[0].appendChild(imageElement)
        imageElement.addEventListener('mouseenter', () => {
            imageElement.classList.add('images-line_item_active')
        })
        imageElement.addEventListener('mouseleave', () => {
            imageElement.classList.remove('images-line_item_active')
        })
    })

    const imagesSecond = createImageElements(
        videoImagesDataCopy,
        imagesContainers[1]
    )

    imagesSecond.forEach((imageElement) => {
        imagesContainers[1].appendChild(imageElement)
        imagesContainers[1].style.transform = `translateX(${positionSecondContainer}px)`
        imageElement.addEventListener('mouseenter', () => {
            imageElement.classList.add('images-line_item_active')
        })
        imageElement.addEventListener('mouseleave', () => {
            imageElement.classList.remove('images-line_item_active')
        })
    })

    function startMoveContainersInterval() {
        const moveContainersInterval = setInterval(() => {
            Math.abs(positionFirstContainer) >
            imagesContainerWidth - imagesOffset * imageWidth
                ? (positionFirstContainer = 0)
                : (positionFirstContainer -= pixelsMoveFirst)

            Math.abs(positionSecondContainer) >
            imagesContainerWidth - imagesOffset * imageWidth
                ? (positionSecondContainer = 0)
                : (positionSecondContainer -= pixelsMoveSecond)

            imagesContainers[0].style.transform = `translateX(${positionFirstContainer}px)`
            imagesContainers[1].style.transform = `translateX(${positionSecondContainer}px)`
        }, 15)
        return moveContainersInterval
    }

    imagesContainers[0].addEventListener('mouseenter', () => {
        pixelsMoveFirst = hoverMoveSpeed
    })
    imagesContainers[0].addEventListener('mouseleave', () => {
        pixelsMoveFirst = moveSpeed
    })

    imagesContainers[1].addEventListener('mouseenter', () => {
        pixelsMoveSecond = hoverMoveSpeed
    })
    imagesContainers[1].addEventListener('mouseleave', () => {
        pixelsMoveSecond = moveSpeed * 1.3
    })
})
