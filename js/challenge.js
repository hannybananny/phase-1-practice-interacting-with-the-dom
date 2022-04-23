let timeVariable = setInterval(setTimer, 1000)
const counter = document.getElementById('counter')
const numberObj = {}

document.addEventListener("DOMContentLoaded", () => {
    let showLikes = document.querySelector('.likes')
    const heartBtn = document.getElementById('heart')
               
    heartBtn.addEventListener('click', e => {
        let number = parseInt(counter.innerText)
        count = 1
        if (numberObj[number] === number){
            numberObj[number] = count++
            let newLi = document.getElementById(`${number}`)
            newLi.innerText = `${number}` + ' has been liked ' + `${numberObj[number]}` + ' times'
            }
        //number as key in object
        //number is key, value is how many times like
            else {
            numberObj[number] = count
            let secondVariable = counter.textContent
            let likesLi = document.createElement('li')
            likesLi.setAttribute("id", secondVariable);
            likesLi.innerHTML = secondVariable + ' has been liked ' + `${numberObj[number]}` + ' time'
            showLikes.appendChild(likesLi)
        
        }
    })
    
    const btn = document.getElementById('pause')
    btn.addEventListener('click', e => {
        
        if(btn.textContent === 'resume'){
            btn.innerHTML = 'pause'
            timeVariable = setInterval(setTimer, 1000)
        }
        else {
            btn.innerHTML = 'resume'
            clearInterval(timeVariable);
            //only pauses once
        }
    })
})

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

