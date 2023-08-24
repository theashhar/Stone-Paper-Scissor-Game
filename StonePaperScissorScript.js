const stoneElement = document.getElementById('stone')
const paperElement = document.getElementById('paper')
const scissorElement = document.getElementById('scissor')
const CompOutputElement = document.getElementById('CompOutput')
const resultTextElement = document.getElementById('resultText')
const stopGameElement = document.getElementById('stopGame')
const scoreElement = document.getElementById('score')
const counterElement = document.getElementById('counter')

//object to update total score
const TotalScore = {
    score1 : 0,
    matchCount : 0
}
// Call playGame when the page loads
window.onload = function () {
    playGame();
};
// returns random option from three -> stone paper scissor
function compGenerate () {
    ArrayOptions = ['✌️', '✋', '✊']
    const RandNo = Math.floor(Math.random() * ArrayOptions.length)
    CompOutputElement.innerText = ArrayOptions[RandNo]
    return ArrayOptions[RandNo]  
}
let count = 0
function onClickSps(userChoice)  {
    const computerChoice = compGenerate()
    const score = getResult(userChoice, computerChoice)
    //Updating Total score by accessing object
    TotalScore["score1"] += score       //another way of accessing object
    scoreElement.innerText = ` ${TotalScore.score1}`
    TotalScore.matchCount ++
    counterElement.innerText =` ${TotalScore.matchCount}`       
}
//returns value of sps blocks from html by using onClickSps fn
//problem this this function => onclick event handler is called here and and also in the html file. to fix that window.onload is used 
function playGame() {
    const spsBtnElement = document.querySelectorAll('.blocks')
    spsBtnElement.forEach(button => {
        button.onclick = () => {onClickSps(button.value)}  
    })
    stopGameElement.onclick = () => stopGame()
}
// main stone paper scissor logic return
function getResult(user, computer)  {
    let score
    if (user == 'scissor' && computer == '✋') {
        score = 1
        resultTextElement.innerText = 'You Win'
    } else if (user == 'paper' && computer == '✌️') {
    score = -1
    resultTextElement.innerText = 'You Lost'
    } else if (user == 'stone' && computer == '✌️') {
    score = 1
    resultTextElement.innerText = 'You Win'
    } else if (user == 'scissor' && computer == '✊') {
    score = -1
    resultTextElement.innerText = 'You Lost'
    } else if (user == 'stone' && computer == '✋') {
    score = -1
    resultTextElement.innerText = 'You Lost'
    } else if (user == 'paper' && computer == '✊') {
    score = 1
    resultTextElement.innerText = 'You Win'
    } else {
    score = 0
    resultTextElement.innerText = 'Draw'
    }
return score
} 
function stopGame() {
    resultTextElement.innerText = 'Play Again'
    TotalScore['score1'] = 0
    TotalScore['matchCount'] = 0
    scoreElement.innerText = ` ${TotalScore['score1']}`
    counterElement.innerText = ` ${TotalScore.matchCount}`
}