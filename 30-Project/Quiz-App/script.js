const questions = [
    {
        question: "What is captial of India",
        answers: [
            {text: "Delhi", correct: true},
            {text: "Mumbia", correct: false},
            {text: "Kolkat", correct: false},
            {text: "Banglore", correct: false},
        ]
    },
    {
        question: "solve this eqution -9 + 10 = ......",
        answers: [
            {text: "1", correct: false},
            {text: "-1", correct: false},
            {text: "+1", correct: false},
            {text: "Both A and C ", correct: true},
        ]
    },
    {
        question: "solve this eqution 9+999 = ......",
        answers: [
            {text: "-1008", correct: false},
            {text: "1000", correct: false},
            {text: "1008", correct: true},
            {text: "108 ", correct: false},
        ]
    },
    {
        question: "सबसे बड़ा ग्रह है ?",
        answers: [
            {text: "बृहस्पति", correct: true},
            {text: "पृथ्वी", correct: false},
            {text: " युरेनस", correct: false},
            {text: " युरेनस", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz() {
    currentQuestionIndex =0;
    ScreenOrientation = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currenQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currenQuestion.question;

    currenQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        } 
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        } 
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore () {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextButton () {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}
nextBtn.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();