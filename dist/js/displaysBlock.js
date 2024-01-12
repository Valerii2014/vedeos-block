const otherDisplayContainer = document.querySelector(
    '.displays-block_other-displays'
)
const videoDisplay = document.querySelector('.displays-block_video-display')

const otherDisplays = otherDisplayContainer.querySelectorAll(
    '.displays-block_display'
)

function controlVideo(vidFunc) {
    if (!document.getElementById('play')) return

    const iframe = document.getElementById('play').contentWindow
    iframe.postMessage(
        '{"event":"command","func":"' + vidFunc + '","args":""}',
        '*'
    )
}

const displayBlockScrollHandler = () => {
    const { y, height, top } = otherDisplayContainer.getBoundingClientRect()

    if (y < 300) {
        otherDisplayContainer.classList.add(
            'displays-block_other-displays_active'
        )
        controlVideo('playVideo')
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
    const iframe = document.createElement('iframe')
    iframe.src = videoSrc
    iframe.setAttribute('id', 'play')
    videoDisplay.appendChild(iframe)
}

videoDisplay.addEventListener('click', () => openVideo())

window.addEventListener('scroll', displayBlockScrollHandler)

window.dispatchEvent(new Event('scroll'))
