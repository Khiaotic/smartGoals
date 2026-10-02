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
        text: "is rewarded on the completion of goal(s)"
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
        text: "tends to have the tools and skills needed"
    },
 
      {
        id: 14,
        text: "is original, comes up with new ideas"
    },
]

const answers = {};

let currentQuestion = 0;

const questionText = document.querySelector("#questionText");
const questionNumber = document.querySelector("#questionNumber");
const oceanForm = document.querySelector("#oceanForm");


///////////////Populate the Questions///////////////////////
function showQuestion() {
    questionText.textContent = questions[currentQuestion].text;
    questionNumber.textContent = `Question ${currentQuestion +1} of ${questions.length}`;
}
showQuestion();

///////////////When NEXT is CLicked///////////////////////
oceanForm.addEventListener("submit", function(event) {
    console.log("Why you refreshing bum???")
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
        const scores = calculationsOceanScores(answers);
        console.log(scores)
        localStorage.setItem('oceanScores', JSON.stringify(scores));
    }
    
    ///////////////CALCULATIONS//////////////////
    // const openness = calculateOpenness(answers);
    // function calculateOpenness(answers){
    //     return answers[5] + answers[14] - answers[10]
    // }
    // console.log(openness);
    
    // const consciousness = calculateConsciousness(answers);
    // function calculateConsciousness(answers){
    //     return answers[3] + answers[8] - answers[13]
    // }
    // console.log(consciousness);
    
    // const extravert = calculateExtravert(answers);
    // function calculateExtravert(answers){
    //     return answers[6] + answers[11] - answers[1]
    // }
    // console.log(extravert);
    
    // const agreeableness = calculateAgreeableness(answers);
    // function calculateAgreeableness(answers){
    //     return answers[2] + answers[12] - answers[7]
    // }
    // console.log(agreeableness);
    
    // const neuroticism = calculateNeuroticism(answers);
    // function calculateNeuroticism(answers){
    //     return answers[4] + answers[9] - answers[13]
    // }
    // console.log(neuroticism);
    
});

export function calculationsOceanScores(answers){
 const openness = answers[5] + answers[14] - answers[10];
 const consciousness =  answers[3] + answers[8] - answers[13];
 const extravert = answers[6] + answers[11] - answers[1];
 const agreeableness = answers[2] + answers[12] - answers[7];
 const neuroticism =  answers[4] + answers[9] - answers[13];   
return {
    openness, consciousness, extravert, agreeableness, neuroticism
}
}








///////////////Calculating Scores//////////////////////
////o=question5 + 14 -10, c=3-8 (or 3=8) - 13, e= 6+11-1
///a=2+12-7, n=4+9-13

