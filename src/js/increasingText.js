const title = document.querySelector('h1')

const titleTop = title.getBoundingClientRect().y - window.scrollY

let prevMatrixValue = 0
let scrollMultiply = 1
let transformY = 1

const changeTitleMatrix = (
    container,
    maxTranslatePx = 120,
    minTranslatePx = 1,
    K = 650,
    delayValuePx = 0
) => {
    const moveValue = window.scrollY / K

    let parallaxValue = (moveValue * K * scrollMultiply) / K - prevMatrixValue

    if (parallaxValue > 1) {
        container.style.opacity = 1
    } else if (parallaxValue > 0.15 && parallaxValue < 1) {
        container.style.opacity = `${parallaxValue}`
    }

    if (parallaxValue > 120) {
        return
    } else if (parallaxValue > 40) {
        scrollMultiply = 120
        prevMatrixValue = 228
    } else if (parallaxValue > 15) {
        scrollMultiply = 60
        prevMatrixValue = 99
    } else if (parallaxValue > 4) {
        scrollMultiply = 30
        prevMatrixValue = 41.7
    } else if (parallaxValue > 1.2) {
        scrollMultiply = 9
        prevMatrixValue = 9.62
    }

    parallaxValue = (moveValue * K * scrollMultiply) / K - prevMatrixValue
    // console.log(parallaxValue)
    if (parallaxValue > maxTranslatePx) {
        container.style.transform = `matrix(${maxTranslatePx}, 0, 0, ${maxTranslatePx}, 0, 0)`
    } else if (parallaxValue < minTranslatePx) {
        scrollMultiply = 1
        prevMatrixValue = 0
    } else {
        container.style.transform = `matrix(${parallaxValue}, 0, 0, ${parallaxValue}, 0, 0)`
    }
}
window.addEventListener('scroll', () => {
    console.log(scrollMultiply)
    changeTitleMatrix(title)
})

window.dispatchEvent(new Event('scroll'))
