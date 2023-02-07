import dogs from "./data.js";
import Dog from "./Dog.js";

let dogsArray = dogs
let isWaiting = false

function getNewDog(){
    const nextDogData = dogsArray.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function swipe(){
    setTimeout(()=> isWaiting = false, 200)
    if (dogsArray.length > 0){
        currentDog = getNewDog()
        render()
    }
}

function render(){
    document.getElementById('profile').innerHTML = currentDog.getProfileHtml()
}

document.addEventListener('click', e => {
    if (!isWaiting == true) {
        if (e.target.closest('#refuse-btn')) {
            currentDog.setSwipeData('refused')   
        } else if (e.target.closest('#accept-btn')){
            currentDog.setSwipeData('accepted')
        }
        if(e.target.closest('#refuse-btn') || e.target.closest('#accept-btn')){
            render()
            isWaiting = true
            setTimeout(()=>swipe(), 1000) 
        }
    }
})

let currentDog = getNewDog()
render()