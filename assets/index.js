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
let timeLeft = 60; // set the total time for the quiz
let timerId;
const nextButton = document.getElementById('next-btn')
const scoreHolder = document.getElementById('score')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let score =  0;

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    timeLeft = 60; // reset the timer for a new game
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    startTimer();
}
function startTimer() {
    
    timerId = setInterval(() => {
      timeLeft--;
      document.getElementById('time').textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerId);
        resetState();
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
      }
     
    }, 1000);
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    scoreHolder.innerText = "Your Score: " + score
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
       scoreHolder.innerText = " Your Score: " + score 
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    });
}

function resetState() {
clearStatusClass(document.body)
nextButton.classList.add('hide')
while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
} }

function selectAnswer(e) {

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
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
        score++;
        console.log(score)
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {

    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'What is the characters name that you control in The Legend of Zelda' ,
        answers: [
                { text: 'Link', correct: true},
                { text: 'Zelda', correct: false},
                { text: 'Batman', correct: false},
                { text: 'Chris Rock', correct: false},
        ]
    },
    {
        question: 'What is my favorite number' ,
        answers: [
            
                { text: '4', correct: false},
                { text: '8', correct: false},
                { text: '9', correct: true},
                { text: '6', correct: false},
        ]
    },
    {
        question: 'What is the right answer' ,
        answers: [
            
                { text: 'That one', correct: false},
                { text: 'This one', correct: true},
                { text: 'The other one', correct: false},
                { text: 'Not this one', correct: false},
        ]
    },
    {
        question: 'What is 2+2' ,
        answers: [
            
                { text: '4', correct: true},
                { text: '8', correct: false},
                { text: '7', correct: false},
                { text: '6', correct: false},
        ]
    }
]
function endGame() {
    clearInterval(timerId); 
    
  }
