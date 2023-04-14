// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

let shuffledQuestions, currentQuestionIndex

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5 )
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])


}

function showQuestion(question) {

    questionElement.innerText = question.question
    question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    });
}

function resetState() {
clearStatusClass(document.body)
nextButton.classList.add('hide')
while (answerButtonsElement) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}

function selectAnswer(e) {

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    }
  )
  if (shuffledQuestions.length > currentQuestionIndex + 1 ) {
  nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}


function setStatusClass(element, correct) {

    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

}

function clearStatusClass(element) {

    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [

    {
        question: 'What is 2+2' ,
        answers: [
            [
                { text: '4', correct: true},
                { text: '8', correct: false},
                { text: '7', correct: false},
                { text: '6', correct: false},
                

            ]

        ]
    }


]