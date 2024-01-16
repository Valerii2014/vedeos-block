const textBlock = document.querySelector('.increasing-text')
const title = document.querySelector('h1')
const titleWrapper = document.querySelector('.title-wrapper')
const titleTop = title.getBoundingClientRect().y - window.scrollY

let prevMatrixValue = 0
let scrollMultiply = 1

const toggleOverflow = () => {
    if (title.getBoundingClientRect().width > window.innerWidth) {
        titleWrapper.style.position = 'fixed'
        titleWrapper.style.bottom = '0'
    } else {
        titleWrapper.style.position = 'sticky'
        titleWrapper.style.top = '0'
    }
    const bottom = textBlock.getBoundingClientRect().bottom
    if (bottom < 200 && bottom > 0) {
        titleWrapper.style.opacity = `${bottom / 2 / 100}`
    } else if (bottom < 0) {
        titleWrapper.style.display = 'none'
    } else if (bottom > -200) {
        titleWrapper.style.display = 'flex'
    }
}

const changeTitleMatrix = async (
    container,
    maxTranslatePx = 120,
    minTranslatePx = 1,
    K = 650,
    delayValuePx = 0
) => {
    const moveValue = window.scrollY / K
    await setTimeout(() => {}, 300)
    let parallaxValue = (moveValue * K * scrollMultiply) / K - prevMatrixValue

    if (parallaxValue > 1 && parallaxValue < maxTranslatePx) {
        container.style.opacity = 1
        titleWrapper.style.backgroundColor = '#fff'
    } else if (parallaxValue > 0.15 && parallaxValue < 1) {
        container.style.opacity = `${parallaxValue}`
    }

    if (parallaxValue > 120) {
        return
    } else if (parallaxValue > 40) {
        scrollMultiply = 120
        prevMatrixValue = 236
    } else if (parallaxValue > 15) {
        scrollMultiply = 60
        prevMatrixValue = 98
    } else if (parallaxValue > 4) {
        scrollMultiply = 30
        prevMatrixValue = 41.4
    } else if (parallaxValue > 1.2) {
        scrollMultiply = 9
        prevMatrixValue = 9.62
    } else {
        scrollMultiply = 1
        prevMatrixValue = 0
    }

    parallaxValue = (moveValue * K * scrollMultiply) / K - prevMatrixValue

    if (parallaxValue > maxTranslatePx - 5) {
        container.style.transform = `matrix(${maxTranslatePx}, 0, 0, ${maxTranslatePx}, 0, 0)`
        container.style.opacity = 0
        titleWrapper.style.backgroundColor = '#000'
    } else if (parallaxValue < minTranslatePx) {
        return
    } else {
        container.style.transform = `matrix(${parallaxValue}, 0, 0, ${parallaxValue}, 0, 0)`
    }
}
window.addEventListener('scroll', () => {
    changeTitleMatrix(title)
    toggleOverflow()
})

window.dispatchEvent(new Event('scroll'))
