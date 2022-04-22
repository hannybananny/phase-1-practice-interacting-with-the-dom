let timeVariable = setInterval(setTimer, 1000)
const counter = document.getElementById('counter')


function setTimer(){
    counter.innerText = parseInt(counter.innerText) +1
}


function incrementTime(){
    plusSign = document.getElementById('plus')
    plusSign.addEventListener('click', () => {
       counter.innerText = parseInt(counter.innerText) +1
      // counter.innerHTML = countInt + 1
    })
}

incrementTime()

function decrementTime(){
    minusSign = document.getElementById('minus')
    minusSign.addEventListener('click', e => {
        counter.innerText = parseInt(counter.innerText) -1

    })
}

decrementTime()

function likeNumber(){
    let numberOfLikes = {}
    let showLikes = document.querySelector('.likes')
    const heartBtn = document.getElementById('heart')
    let number = counter.innerText
    let count = 1
    numberOfLikes.number = count++               
    heartBtn.addEventListener('click', e => {
        console.log(numberOfLikes)
        const likesLi = document.createElement('li')
        let secondVariable = counter.textContent
        if (numberOfLikes[number]) {
            numberOfLikes[number] = count + count
        }
        else {
            numberOfLikes[number] = 1
        }
        likesLi.innerHTML = secondVariable + ' has been liked ' + `${numberOfLikes[number]}` + ' times'
        showLikes.appendChild(likesLi)
        //need to access number of clicks per second
        
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

