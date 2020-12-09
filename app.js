const moles = document.querySelectorAll('.mole')

const rand = Math.floor(Math.random() * 130)
console.log(rand)
for (let mole of moles){
    mole.animate([
        //keyFrames
        {transform: `translateY(${rand}px)`},
        {transform: 'translateY(150px)'},
        {transform: `translateY(${rand}px)`},
    ], {
        //timing options
        duration: Math.floor(Math.random() * 2000),
        iterations: 50
    })
}