const scores = JSON.parse(localStorage.getItem('oceanScores'))


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
///////////////Card Ocean Ids///////////////////////
const openGen = document.getElementById('ope');
const conGen = document.getElementById('con');
const extraGen = document.getElementById('extra');
const agrGen = document.getElementById('agr');
const neuGen = document.getElementById('neu');

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
        cardDisplay.querySelector("#ope").innerText= scores.openness;
        cardDisplay.querySelector("#con").innerText= scores.consciousness;
        cardDisplay.querySelector("#extra").innerText= scores.extravert;
        cardDisplay.querySelector("#agr").innerText= scores.agreeableness;
        cardDisplay.querySelector("#neu").innerText= scores.neuroticism;
    ////Preserve Answers and add a new card////
    cardItems.appendChild(cardDisplay);
    ////Delete a card////
    cardItems.addEventListener('click', e => {
        ///classList- returns the CSS classnames of an element
        ///e.target-short hand for event.target
        /// e = eventObject
        if (e.target.classList.contains('button_delete')) {
            ///closest() traverses the specified element and its parent in the DOM
            e.target.closest(".card").remove();
        }
    })
    ////reset////
        smartForm.reset();
});
    

