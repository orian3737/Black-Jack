let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Player",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRanmdomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11

    } else {
        return randomNumber
    }

}


function startGame() {
    isAlive = true
    let firstCard = getRanmdomCard()
    let secondCard = getRanmdomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want a hit? 😈"
    } else if (sum === 21) {
        message = "You have BlackJack! 🤑"
        hasBlackJack = true
    } else {
        message = "You Busted 🤮"
        isAlive = false

    }
    messageEl.textContent = message

}

function hit() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRanmdomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}