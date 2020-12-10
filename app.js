const moles = document.querySelectorAll('.mole')
const startBtn = document.querySelector('.btn')

const rand = Math.floor(Math.random() * 130)
const molesArr = []
const PlayGame = () => {
    const randomMole = Math.floor(Math.random()*moles.length)
    for (let i=0; i<=randomMole; i++){
        moles[i].classList.toggle('moleanimation')
    }
}

startBtn.addEventListener('click', PlayGame)