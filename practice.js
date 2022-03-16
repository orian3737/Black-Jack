// // let num1 = 8
// // let num2 = 2

// // document.getElementById("num1-el").textContent = num1
// // document.getElementById("num2-el").textContent = num2

// // let sumEl = document.getElementById("sum-el")

// // function add() {
// //     let result = num1 + num2
// //     sumEl.textContent = "Sum: " + result
// // }

// // function subtract() {
// //     let result = num1 - num2
// //     sumEl.textContent = "Sum: " + result


// // }

// // function divide() {
// //     let result = num1 * num2
// //     sumEl.textContent = "Sum: " + result


// // }

// // function multiply() {
// //     let result = num1 / num2
// //     sumEl.textContent = "Sum: " + result


// // }


// let age = 101

// if (age === 100) {
//     console.log("Here is your birthbay card from the king!")
// } else if (age < 100) {
//     console.log("Grow the fuck up!")
// } else {
//     console.log("WOW you are fucking old!")
// }

// let featurerdPosts = ["Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// for (let count = 1; count < 11; count += 1) {
//     console.log(count)
// }()
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

function getTotoalRaceTime() {
    return player1Time + player2Time
}

["A♣️", "2♣️", "3♣️", "4♣️", "5♣️", "6♣️", "7♣️", "8♣️", "9♣️", "10♣️", "J♣️", "Q♣️", "K♣️",
    "A♥️", "2♥️", "3♥️", "4♥️", "5♥️", "6♥️", "7♥️", "8♥️", "9♥️", "10♥️", "J♥️", "Q♥️", "K♥️",
    "A♠️", "2♠️", "3♠️", "4♠️", "5♠️", "6♠️", "7♠️", "8♠️", "9♠️", "10♠️", "J♠️", "Q♠️", "K♠️",
    "A♦️", "2♦️", "3♦️", "4♦️", "5♦️", "6♦️", "7♦️", "8♦️", "9♦️", "10♦️", "J♦️", "Q♦️", "K♦️"
]


let hasSolvedChallenges = false
let hasHintsleft = false

if (hasSolvedChallenges === false && hasHintsleft === false) {
    showSoluition()
}

function showSoluition() {
    console.log("Showing the solution....")
}