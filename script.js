let suits = ["swords", "cups", "coins", "clubs"]
let values = ["1","2","3","4","5","6","7","knave","knight","king"]

let deck = [];

let players = {
    player1: {
        name: "Mark",
        hand: [],
        points: 0,
    },
    player2: {
        name: "Vincenzo",
        hand: [],
        points: 0,
    },
    player3: {
        name: "Fabian",
        hand: [],
        points: 0,
    },
    player4: {
        name: "Mauro",
        hand: [],
        points: 0,
    },
}

let table = []

function getDeck() {
    deck = new Array();

    for (let i=0; i < suits.length; i++) {

        for (let x=0; x < values.length; x++) {
            let card = `Value: ${values[x]}, Suit: ${suits[i]} `
            deck.push(card)
        }

    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < 1000; i++) {
        let randomNumber1 = Math.floor(Math.random() * deck.length)
        let randomNumber2 = Math.floor(Math.random() * deck.length)
    
        let temp = deck[randomNumber1]
        deck[randomNumber1] = deck[randomNumber2]
        deck[randomNumber2] = temp
    }
}



function startGame() {
    getDeck()
    shuffleDeck(deck)
    console.log(deck)
    drawCardsAtStartGame()
    console.log(`Player 1 Hand: ${players.player1.hand}`)
    console.log(`Table: ${table}`)
}



const startGameBtn = document.getElementById("start-game-btn");

startGameBtn.addEventListener("click", function() {
    startGame()
})

function drawCardsAtStartGame() {
    for (let i=0; i<3;  i++) {
        let card = deck.shift()
        players.player1.hand.push(card)
        card = deck.shift()
        players.player2.hand.push(card)
        card = deck.shift()
        players.player3.hand.push(card)
        card = deck.shift()
        players.player4.hand.push(card)
    }

    for (let i=0; i<4; i++) {
        let card = deck.shift()
        table.push(card)
    }
}


