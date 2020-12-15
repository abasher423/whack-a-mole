// add levels (expert mode) [DONE]
// save to local storage (add a scoreboard)
// add sound effects (OPTIONAL)
// add animation to when mole is clicked
// make moles stay down

const moles = document.querySelectorAll('.mole')
const holes = document.querySelectorAll('.hole')
const scoreboard = document.querySelector('.score')
const startBtn = document.querySelector('.start')
const dropdown = document.querySelector('select')
const status = document.querySelector('.status')
const roundLabel = document.querySelector('.round')
const resetBtn = document.querySelector('.reset')

let lastHole
let timeUp = false
let score = 0
let currentScore = 0;
let isPlaying = false
// let activeMoles = []
let difficulty = ''
let time = 0
let round = ''
status.innerText = '"Only those who dare to fail greatly can ever achieve greatly"'


function randomTime(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length)
    const hole = holes[idx]
    if(hole === lastHole){ // so mole doesn't pop from the same hole
        return randomHole(holes)
    }
    lastHole = hole
    return hole
}
