let timeVariable = setInterval(setTimer, 1000)
let totalSeconds = 0

function setTimer(){
    totalSeconds++
    document.getElementById('counter').innerHTML = totalSeconds
}

function incrementTime(){
    plusSign = document.getElementById('plus')
    plusSign.addEventListener('click', e => {
        (setTimer() +1)
    })
}

incrementTime()

function decrementTime(){
    minusSign = document.getElementById('minus')
    minusSign.addEventListener('click', e => {
        (setTimer() -1)
    //this is adding on second
    })
}

decrementTime()

function likeNumber(){
    const heartBtn = document.getElementById('heart')
    heartBtn.addEventListener('click', e => {
        let secondVariable = document.getElementById('counter').textContent
        const list = document.createElement('li')
        list.innerHTML = secondVariable + ' has been liked' + ' times'
        document.querySelector('ul').appendChild(list)
        //need to access number of clicks per second
        // let count = 0
        //
    })
}

likeNumber()

function pauseCounter(){
    const btn = document.getElementById('pause')
    btn.addEventListener('click', e => {
        //if paused, resume
        if(btn.textContent === 'resume'){
            btn.innerHTML = 'pause'
            setInterval(setTimer(), 1000)
            //only adds one second
            
        }
        //if running, pause 
        else {
            btn.innerHTML = 'resume'
            clearInterval(timeVariable);
            myInterval = -1
        }
    })
}

pauseCounter()

let form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault(addComment(e.target.comment_input.value))
    form.reset()
})

function addComment(comment){
    let p = document.createElement('p')
    p.textContent = `${comment}`
    document.querySelector("#list").appendChild(p)
}

