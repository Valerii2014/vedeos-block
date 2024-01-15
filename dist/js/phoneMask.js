const tel = document.querySelector('.tel')
const dataCountry = document.querySelectorAll('.select-country__item')

const matrixData = {
    by: '+7 (b__) ___ ____',
    kz: '+7 (k__) ___ ____',
    ru: '+7 (___) ___ ____',
    ua: '+38 (0__) ___ __ __',
}

let selectedCountry = 'ua',
    phoneNumber = matrixData[selectedCountry]

dataCountry.forEach((item) =>
    item.addEventListener('click', () => {
        selectedCountry = item.getAttribute('data-country')
        phoneNumber = matrixData[selectedCountry]
        tel.value = phoneNumber
    })
)

tel.value = phoneNumber

const addEvents = () => {
    tel.addEventListener('input', mask)
    tel.addEventListener('focus', mask)
    tel.addEventListener('blur', mask)
    tel.addEventListener('keydown', mask)
}
const removeEvents = () => {
    tel.removeEventListener('input', mask)
    tel.removeEventListener('focus', mask)
    tel.removeEventListener('blur', mask)
    tel.removeEventListener('keydown', mask)
}

function mask(event) {
    var pos = this.selectionStart
    let keyCode
    event.keyCode && (keyCode = event.keyCode)
    if (keyCode > 47 && keyCode < 58) {
        phoneNumber += String.fromCharCode(keyCode)
    }
    tel.removeEventListener('input', mask)
    if (keyCode === 8 && pos > 0 && pos < matrixData[selectedCountry].length) {
        event.preventDefault()
        console.log(phoneNumber.slice(0, pos - 1), phoneNumber.slice(pos))
        phoneNumber =
            phoneNumber.slice(0, pos - 1) +
            matrixData[selectedCountry][pos] +
            phoneNumber.slice(pos)
        this.value = phoneNumber

        return
    }
    console.log(keyCode)
    this.value = phoneNumber

    if (pos < 3) event.preventDefault()
    let matrix = matrixData[selectedCountry],
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, ''),
        new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) : a
        })

    i = new_value.indexOf('_')
    if (i != -1) {
        i < 5 && (i = 3)
        new_value = new_value.slice(0, i)
    }

    var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
            return '\\d{1,' + a.length + '}'
        })
        .replace(/[+()]/g, '\\$&')
    reg = new RegExp('^' + reg + '$')

    if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
    ) {
        phoneNumber = new_value
    }

    console.log(phoneNumber)

    this.value = formatPhoneNumber(event)

    if (event.type == 'blur' && this.value.length < 5) {
        this.value = ''
    }
    this.value = formatPhoneNumber(phoneNumber)

    tel.addEventListener('input', mask)

    // console.log(phoneNumber)
    // console.log(formatPhoneNumber(phoneNumber))
}

function formatPhoneNumber(enteredDigits) {
    const mask = matrixData[selectedCountry]
    let formattedNumber = ''

    mask.split('').forEach((maskChar, i) => {
        if (
            maskChar === '+' ||
            maskChar === '(' ||
            maskChar === ')' ||
            maskChar === ' '
        ) {
            formattedNumber += maskChar
        } else {
            formattedNumber += enteredDigits[i] || maskChar
        }
    })

    return formattedNumber
}

addEvents()
