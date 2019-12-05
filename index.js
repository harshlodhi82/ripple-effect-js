var cont = document.getElementById('cont')
var rippel = document.getElementById('rippel')

cont.addEventListener('click', (data) => {
    rippel.style.transition = 'width 1s ease-in, height 1s ease-in'
    if (rippel.style.width === '2000px') {
        let top = data.offsetY
        let left = data.offsetX
        rippel.style.top = top + 'px'
        rippel.style.left = left + 'px'
        rippel.style.width = '0px'
        rippel.style.height = '0px'
    } else {
        rippel.style.width = '0px'
        rippel.style.height = '0px'
        let top = data.offsetY
        let left = data.offsetX
        rippel.style.top = top + 'px'
        rippel.style.left = left + 'px'
        rippel.style.width = '2000px'
        rippel.style.height = '2000px'
    }

})

