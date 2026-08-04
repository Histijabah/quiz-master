const quizzes = {
  general: [
    {
      question: "What is the capital city of Nigeria?",
      options: [
        "Lagos",
        "Abuja",
        "Kano",
        "Port Harcourt"
      ],
      answer: "Abuja"
    },

    {
      question: "Which planet is known as the Red Planet?",
      options: [
        "Earth",
        "Mars",
        "Jupiter",
        "Venus"
      ],
      answer: "Mars"
    },

    {
      question: "How many continents are there in the world?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      answer: "7"
    },

    {
      question: "Which ocean is the largest in the world?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
      ],
      answer: "Pacific Ocean"
    },

    {
      question: "Who invented the telephone?",
      options: [
        "Thomas Edison",
        "Alexander Graham Bell",
        "Nikola Tesla",
        "Isaac Newton"
      ],
      answer: "Alexander Graham Bell"
    },

    {
      question: "Which country is famous for the Eiffel Tower?",
      options: [
        "Italy",
        "Germany",
        "France",
        "Spain"
      ],
      answer: "France"
    },

    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Hydrogen"
      ],
      answer: "Carbon Dioxide"
    },

    {
      question: "How many days are there in a leap year?",
      options: [
        "365",
        "366",
        "364",
        "367"
      ],
      answer: "366"
    },

    {
      question: "Which is the largest mammal in the world?",
      options: [
        "Elephant",
        "Blue Whale",
        "Giraffe",
        "Hippopotamus"
      ],
      answer: "Blue Whale"
    },

    {
      question: "What is the hardest natural substance on Earth?",
      options: [
        "Iron",
        "Gold",
        "Diamond",
        "Silver"
      ],
      answer: "Diamond"
    }
  ],

  javascript: [
    {
        question: "Which keyword is used to declare a variable that can be reassigned?",
        options: [
            "const",
            "let",
            "varies",
            "define"
        ],
        answer: "let"
    },

    {
        question: "Which method is used to select an element by its ID?",
        options: [
            "queryElement()",
            "getElementById()",
            "getElementsByClass()",
            "queryElements()"
        ],
        answer: "getElementById()"
    },

    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "/* */",
            "//",
            "<!-- -->",
            "#"
        ],
        answer: "//"
    },

    {
        question: "Which event occurs when a button is clicked?",
        options: [
            "mouseover",
            "submit",
            "click",
            "keydown"
        ],
        answer: "click"
    },

    {
        question: "Which method is used to add an event listener to an element?",
        options: [
            "addListener()",
            "listenEvent()",
            "addEventListener()",
            "eventListener()"
        ],
        answer: "addEventListener()"
    },

    {
        question: "Which array method adds an item to the end of an array?",
        options: [
            "pop()",
            "shift()",
            "push()",
            "unshift()"
        ],
        answer: "push()"
    },

    {
        question: "Which keyword is used to define a function?",
        options: [
            "method",
            "func",
            "function",
            "define"
        ],
        answer: "function"
    },

    {
        question: "Where is data stored so it remains available after the browser is closed?",
        options: [
            "sessionStorage",
            "localStorage",
            "cookiesOnly",
            "temporaryStorage"
        ],
        answer: "localStorage"
    },

    {
        question: "Which operator checks both value and data type?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Desktop Object Manager",
            "Document Order Method"
        ],
        answer: "Document Object Model"
    }
]
};



// Screens

const startScreen = document.getElementById("start-screen");
const categoryScreen = document.getElementById("category-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("end-screen");


// Buttons

const startBtn = document.querySelector(".start-button");
const nextBtn = document.getElementById("next-button");
const playAgainBtn = document.getElementById("play-again-button");


// Category Buttons

const categoryBtns = document.querySelectorAll(".category-btn");

const generalBtn = document.getElementById("general-btn");
const javascriptBtn = document.getElementById("javascript-btn");


// Quiz Information

const question = document.getElementById("question");

const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");

const time = document.getElementById("time");


// Radio Buttons

const radioButtons = document.querySelectorAll(
    'input[name="answer"]'
);


// Result Screen

const category = document.getElementById("category");
const score = document.getElementById("score");

const scoreNumber = document.getElementById("score-number");

const percentage = document.getElementById("percentage");

const performance = document.getElementById("performance");

const performanceMessage = document.getElementById("performance-message");




let currentCategory = "";

let currentQuiz = [];

let currentQuestionIndex = 0;

let currentScore = 0;

let timer;

let timeLeft = 60;



    startScreen.style.display = "block center";
    categoryScreen.style.display = "none";
    quizScreen.style.display = "none";
    resultScreen.style.display = "none";    


startBtn.addEventListener("click", function(){
     startScreen.style.display = "none";
    categoryScreen.style.display = "block";
    quizScreen.style.display = "none";
    resultScreen.style.display = "none";
    
})



// timer function
function startTimer() {

    // Stop any previous timer
    clearInterval(timer);

    // Start from 60 seconds
    timeLeft = 90;
    time.textContent = timeLeft;

    timer = setInterval(function () {

        timeLeft--;

        time.textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("Time's up!");

        }

    }, 1000);
}



function showQuizScreen(){

    startScreen.style.display = "none";
    categoryScreen.style.display = "none";
    quizScreen.style.display = "block";
    resultScreen.style.display = "none";

}



function displayQuestion(){

    question.textContent = currentQuiz[currentQuestionIndex].question;

    optionA.textContent = currentQuiz[currentQuestionIndex].options[0];

    optionB.textContent = currentQuiz[currentQuestionIndex].options[1];

    optionC.textContent = currentQuiz[currentQuestionIndex].options[2];

    optionD.textContent = currentQuiz[currentQuestionIndex].options[3];


    // Unselect all radio buttons
    radioButtons.forEach(function(radio) {
        radio.checked = false;
    });


     // Change button text on the last question
    if (currentQuestionIndex === currentQuiz.length - 1) {
        nextBtn.textContent = "Submit";
    } else {
        nextBtn.textContent = "Next";
    }
}


generalBtn.addEventListener("click", function(){

    currentCategory = "General Knowledge";

    currentQuiz = quizzes.general;
    currentQuestionIndex = 0;

    showQuizScreen();
    displayQuestion();
    startTimer();

});



javascriptBtn.addEventListener("click", function(){

    currentCategory = "JavaScript";

    currentQuiz = quizzes.javascript;
    currentQuestionIndex = 0;

    showQuizScreen();
    displayQuestion();
    startTimer();

});



function checkAnswer() {

    const selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );

    // If no answer was selected
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return false;
    }

    let selectedOption;

    if (selectedAnswer.value === "A") {
        selectedOption = optionA.textContent;
    }

    if (selectedAnswer.value === "B") {
        selectedOption = optionB.textContent;
    }

    if (selectedAnswer.value === "C") {
        selectedOption = optionC.textContent;
    }

    if (selectedAnswer.value === "D") {
        selectedOption = optionD.textContent;
    }


    // Compare selected answer with correct answer
    if (
        selectedOption === currentQuiz[currentQuestionIndex].answer
    ) {
        currentScore++;

        console.log("Correct!");
        console.log("Score:", currentScore);

    } else {

        console.log("Wrong!");

    }

    return true;
}



nextBtn.addEventListener("click", function () {

    const answered = checkAnswer();

    if (!answered) {
        return;
    }

    // If this is the last question
    if (currentQuestionIndex === currentQuiz.length - 1) {

        showResult();

        return;
    }

    // Otherwise go to the next question
    currentQuestionIndex++;

    displayQuestion();

});



function showResult() {

    // Stop the timer
    clearInterval(timer);

    // Hide quiz screen
    quizScreen.style.display = "none";

    // Show result screen
    resultScreen.style.display = "flex";


    // Display category
    category.textContent = currentCategory;


    // Display actual score
    scoreNumber.textContent = currentScore;


    // Calculate percentage
    const percent = Math.round(
        (currentScore / currentQuiz.length) * 100
    );


    // Display percentage
    percentage.textContent = `${percent}%`;


    // Display performance
    if (percent >= 80) {

        performance.textContent = "Excellent Work!";

        performanceMessage.textContent =
            "You really did a great job.";

    } 
    
    else if (percent >= 60) {

        performance.textContent = "Good Job!";

        performanceMessage.textContent =
            "You have a good understanding of the topic.";

    } 
    
    else if (percent >= 50) {

        performance.textContent = "Not Bad!";

        performanceMessage.textContent =
            "You passed, but there is still room for improvement.";

    } 
    
    else if (percent >= 30) {

        performance.textContent = "Keep Practicing!";

        performanceMessage.textContent =
            "You need more practice. Don't give up.";

    } 
    
    else {

        performance.textContent = "You Can Do Better!";

        performanceMessage.textContent =
            "Keep studying and try the quiz again.";

    }

}



// const playAgainBtn = document.getElementById("play-again-button");
const homeBtn = document.getElementById("home-button");

playAgainBtn.addEventListener("click", function () {

    // Reset quiz
    currentQuestionIndex = 0;
    currentScore = 0;

    // Show quiz screen
    resultScreen.style.display = "none";
    quizScreen.style.display = "block";

    // Display first question
    displayQuestion();

    // Start timer again
    startTimer();

});

homeBtn.addEventListener("click", function () {

    // Stop timer
    clearInterval(timer);

    // Reset quiz data
    currentQuestionIndex = 0;
    currentScore = 0;
    currentCategory = "";
    currentQuiz = [];

    // Hide other screens
    resultScreen.style.display = "none";
    quizScreen.style.display = "none";
    categoryScreen.style.display = "none";

    // Show home screen
    startScreen.style.display = "block";

});

