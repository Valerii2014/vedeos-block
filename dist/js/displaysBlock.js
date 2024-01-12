const videoDisplay = document.querySelector('.displays-block_video-display')
const otherDisplayContainer = document.querySelector(
    '.displays-block_other-displays'
)
const otherDisplays = otherDisplayContainer.querySelectorAll(
    '.displays-block_display'
)

const controlVideo = (vidFunc) => {
    const iframe = document.querySelector('#play')

    iframe?.contentWindow.postMessage(
        '{"event":"command","func":"' + vidFunc + '","args":""}',
        '*'
    )
}

const displayBlockScrollHandler = () => {
    const { y, height, top } = otherDisplayContainer.getBoundingClientRect()

    if (y < 300) {
        if (
            otherDisplayContainer.classList.contains(
                'displays-block_other-displays_active'
            )
        ) {
            controlVideo('playVideo')
        }

        otherDisplayContainer.classList.add(
            'displays-block_other-displays_active'
        )
    }
    if (y + height < 200 || top - window.innerHeight > 0) {
        otherDisplayContainer.classList.remove(
            'displays-block_other-displays_active'
        )

        controlVideo('pauseVideo')
    }
}

const openVideo = (
    videoSrc = 'https://www.youtube.com/embed/bd-KpqIyLUk?autoplay=1&enablejsapi=1&html5=1'
) => {
    if (document.querySelector('#play')) return
    const iframe = document.createElement('iframe')
    iframe.src = videoSrc
    iframe.setAttribute('id', 'play')
    videoDisplay.appendChild(iframe)
}

videoDisplay.addEventListener('click', () => openVideo())

window.addEventListener('scroll', displayBlockScrollHandler)

window.dispatchEvent(new Event('scroll'))
