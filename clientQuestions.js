const questions= [
    {
        id: 1,
        text: "tends to keep ideas and progress to myself"
    },
    {
        id: 2,
        text: "is accountable and committed"
    },
     {
        id: 3,
        text: "tends to be disorganized"
    },
     {
        id: 4,
        text: "worries a lot"
    },
    {
        id: 5,
        text: "is engaged by projects that require creativity, problem-solving, or organizing"
    },
     {
        id: 6,
        text: "is rewarded on the completion of this goal"
    },
      {
        id: 7,
        text: "assumes trust in the process"
    },
      {
        id: 8,
        text: "has difficulty getting started on tasks"
    },
      {
        id: 9,
        text: "tends to feel the anticipation of failure"
    },
      {
        id: 10,
        text: "has little to no interests in goals that lack clear, practical outcome" 
    },
      {
        id: 11,
        text: "is full of motivation"
    },
      {
        id: 12,
        text: "respects other's time"
    },
      {
        id: 13,
        text: "has the tools and skills needed"
    },
 
      {
        id: 14,
        text: "is original, comes up with new ideas"
    },
]

const answers = {};

let currentQuestion = 0;

const form = document.querySelector("#oceanForm");
const questionText = document.querySelector("#questionText");
const questionNumber = document.querySelector("#questionNumber");


///////////////Populate the Questions///////////////////////
function showQuestion() {
    questionText.textContent = questions[currentQuestion].text;
    questionNumber.textContent = `Question ${currentQuestion +1} of ${questions.length}`;
}

///////////////When NEXT is CLicked///////////////////////
from.addEventListener("submit", function(event) {

    event.preventDefault();

    const selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );
    if (!selectedAnswer) {
        alert("Please answer statement");
        return;
    }

    answers[questions[currentQuestion].id] = Number(selectedAnswer.value);
    console.log(answers)
    currentQuestion ++;

    if (currentQuestion < questions.length) {
        showQuestion ()
    }
    else {
        console.log("Assessment Completed")
    }
});

// console.log ({
//     question: questions[currentQuestion],
//     answer: selectedAnswer.value
// });




///////////////Calculating Scores//////////////////////
// const oScore = 
// answers[5]+
// answers[14]-
// answers[7];

// function populateOCEAN (){

// }
