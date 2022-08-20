const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const span = document.querySelector('span')
const fundo = document.querySelector('.game-board')
const luser = document.querySelector('.loser')
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

//timer do jogo

var value = parseFloat(span.innerHTML)
var interval = setInterval(() => {
    value += 0.1
    span.innerHTML = value.toFixed(1)
    if (value > 4.0) {
        fundo.classList.add('hard')

        console.log('ja esta')
    }
}, 100)



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const mariPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(mariPosition)



    if (pipePosition <= 120 && pipePosition > 0 && mariPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${mariPosition}px`
        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)
        clearInterval(interval)

        //tela de recomeçar
        luser.style.margin = '0px'

    }
}, 10);

function reload() {
    location.reload()
}


document.addEventListener('keydown', jump)