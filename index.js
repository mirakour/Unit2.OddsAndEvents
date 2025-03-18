// ===State===
const state = {
    numberBank: [],
    odds: [],
    evens: [],
}

// === Functions ===

/*
 * Adds a number to the number bank if it's valid
 * @param {Event} event
 */
function addNumber (event) {
    event.preventDefault()

    const numberInput = document.querySelector("#number")
    const numberValue = parseInt(numberInput.value, 10)

    if (!isNaN(numberValue)) {
        state.numberBank.push(numberValue)
        render()
    }
    numberInput.value = "" // Clear input field after adding
}

/*
 * Sorts one number from the number bank into either the odd or even category  
 */
function sortOne() {
    if (state.numberBank.length === 0)
        return // Do nothing if empty

    const number = state.numberBank.shift() // Remove first number

    if (number % 2 === 0) {
        state.evens.push(number)
    }   else {
        state.odds.push(number)
    }
    render()
}

/*
 * Sorts all numbers from the number bank into the correct category
 */
function sortAll() {
    while (state.numberBank.length > 0) {
        sortOne() // Uses sortOne() logic for each number
    }
 }

 /*
  * Renders numbers in the Number Bank and the sorted categories
  */
function render() {
    // Number Bank
    document.querySelector("#numberBank output").textContent = state.numberBank.join(", ")
    // Sorted Odds
    document.querySelector("#odds output").textContent = state.odds.join(", ")
    // Sorted Evens
    document.querySelector("#evens output").textContent = state.evens.join(", ")
}

/*
 * === EXTENTION === New Feature: Add a random number to thenumber bank
 */
function addRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Random number between 1 to 100
    state.numberBank.push(randomNum)
    render()
}

// === Event Listeners ===
document.querySelector ("form").addEventListener("submit", addNumber)
document.querySelector ("#sortOne").addEventListener("click", sortOne)
document.querySelector ("#sortAll").addEventListener("click", sortAll)
// Add event listener for new "Random Number" button
document.querySelector ("#randomNumber").addEventListener("click", addRandomNumber)

// Initial render
render ();