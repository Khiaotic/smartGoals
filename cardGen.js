

const cardTemplate= document.querySelector("#cardTemplate");
const cardItems= document.querySelector(".cardItems");
// const createButton = document.getElementById('createButton');
// const resetButton = document.getElementById('resetButton');
///////////////Form TextArea Ids///////////////////////
const smartForm = document.querySelector(".smartForm");
const specificAnswer = document.getElementById('s');
const measureAnswer = document.getElementById('m');
const achieveAnswer = document.getElementById('a');
const relevantAnswer = document.getElementById('r');
const timeAnswer = document.getElementById('t');
///////////////Card TextArea Ids///////////////////////
const specificGen = document.getElementById('specific');
const measureGen = document.getElementById('measurement');
const achieveGen = document.getElementById('achieve');
const relevantGen = document.getElementById('relative');
const timeGen = document.getElementById('timeBound');


////////////////When Create Button is Pressed///////////
smartForm.addEventListener("submit", function(event) {
    event.preventDefault();

    ////Clone/////
    console.log(cardTemplate);
    const cardDisplay = cardTemplate.content.cloneNode(true);
    ////Clone Card Elements into clone card/////
        cardDisplay.querySelector("#specific").innerText = specificAnswer.value;
        cardDisplay.querySelector("#measurement").innerText = measureAnswer.value;
        cardDisplay.querySelector("#achieve").innerText = achieveAnswer.value;
        cardDisplay.querySelector("#relative").innerText = relevantAnswer.value;
        cardDisplay.querySelector("#timeBound").innerText = timeAnswer.value;
    ////Preserve Answers and add a new card////
        cardItems.appendChild(cardDisplay);
    ////reset////
        smartForm.reset();
});
    

