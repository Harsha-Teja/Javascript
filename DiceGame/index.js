// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

// To reset the gamae after one of the two players win the game
function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    // This condition will run with respect to the player identity playing
    if (player1Turn) {
        // We are calculating the random number whe nthe player 1
        player1Score += randomNumber
        // Displaying the number
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        // Making the player 1 word inactive and activating the player 2 to display
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    // Condition to hit when if any of one player is scroing more than 10
    if (player1Score >= 10) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 10) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

//  To reset the game we are making everthing back to initial state
function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
