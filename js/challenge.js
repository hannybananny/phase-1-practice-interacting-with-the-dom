let timeVariable = setInterval(setTimer, 1000)
const counter = document.getElementById('counter')
let numberArr = []


function setTimer(){
    counter.innerText = parseInt(counter.innerText) +1
}


function incrementTime(){
    plusSign = document.getElementById('plus')
    plusSign.addEventListener('click', () => {
       counter.innerText = parseInt(counter.innerText) +1
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
    let showLikes = document.querySelector('.likes')
    const heartBtn = document.getElementById('heart')
    let count = 1
    let number = counter.innerText               
    heartBtn.addEventListener('click', e => {
        let secondVariable = counter.textContent
        console.log(numberArr)
        const likesLi = document.createElement('li')
        likesLi.setAttribute("id", `${secondVariable}`);

        if (numberArr[number] = document.getElementById(`${secondVariable}`)) {
            numberArr[number] = count++
        }
        else {
            numberArr.number = count
        }

        likesLi.innerHTML = secondVariable + ' has been liked ' + ' times'
        showLikes.appendChild(likesLi)
        
        //take number counter currently is
        //compare it to strings that have already been printed on DOM
    })
}

likeNumber()

function pauseCounter(){
    const btn = document.getElementById('pause')
    btn.addEventListener('click', e => {
        
        if(btn.textContent === 'resume'){
            btn.innerHTML = 'pause'
            setInterval(setTimer, 1000)
        }
        else {
            btn.innerHTML = 'resume'
            clearInterval(timeVariable);
            //only pauses once
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

