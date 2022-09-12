const places = document.querySelectorAll('.place')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.querySelector('.start')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

start.addEventListener('click', () => { location.reload() })

function apear(){
    places.forEach(place => {
        place.classList.remove('mole')
    })

    let randomPlace  = places[Math.floor(Math.random() * 16)] 
    randomPlace.classList.add('mole')
    hitPosition = randomPlace.id
}

places.forEach(place => {
    place.addEventListener('mousedown', () => {
        if (place.id == hitPosition) {
            result++
            console.log(result);
            score.textContent = result
            hitPosition = null
        } 
    })
})

function moveMole(){
    timerId = setInterval(apear, 800)
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your final score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)

//places.addEventListener(onclick, apear);



//Set timeout 15s- 15000 - WHEN PLAY START

//Score, each mole touched +1