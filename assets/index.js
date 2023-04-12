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
const questionContainerElement = document.getElementById('question-container'
)
const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5 )
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

    showQuestion(shuffledQuestions[currentQuestionIndex])


}

const questions = [

    {
        question: 'What is 2+2'
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