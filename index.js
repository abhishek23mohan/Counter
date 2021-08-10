//document.getElementById("count").innerHTML

// let myAge = 25
// // console.log(myAge)

// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 0
// console.log(count)

// let bonusPoint = 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// function increment(){
//     console.log("The button was clicked")
// }

// let lap1 = 10
// let lap2 = 12
// let lap3 = 9

// function lapTime(){
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// lapTime()

// let lapsCompleted = 0

// function incrementLaps(){
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLaps()
// incrementLaps()
// incrementLaps()

// console.log(lapsCompleted)

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}


function saved(){
    console.log(count)
}

// let message = "You have 3 new notifications"
// let user = "Abhishek"
// console.log(message + ", " + user)

// let messageToUser = "You have 3 new notifications" + ", " + "Abhishek"
// console.log(messageToUser)

let name = "Abhishek"
let greeting = "Hi, my name is "
let myGreetings = greeting + name
console.log(myGreetings) 