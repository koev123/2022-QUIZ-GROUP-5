
// --------------chansok---------------
let title = document.getElementById("title");
let passage = document.getElementById("passage");
let enterQuestion = document.querySelector(".add-question");
let answers = document.getElementsByName('answer');
let addRadio = document.getElementsByClassName("add-radio");

let answerKey1 = document.querySelector('#answerKey1');
let answerKey2 = document.querySelector('#answerKey2');

let getAddOption = document.getElementsByClassName("add-option-answer");

let appearQuetion = document.getElementById("display");
// ---------
let createQuiz=document.getElementById("createQuiz");
let getQuiz = document.getElementById("displayQuiz");
getQuiz.style.display="none";
/*    when user input question,so it will display question on DOM  */
function displayQuestion(e) {
    e.preventDefault();
    getQuiz.style.display="none";
    createQuiz.style.display="block";
    let data = {
        question: enterQuestion.value,
        answer1: answerKey1.value,
        answer2: answerKey2.value
    }
    console.log("data",data);
    localStorage.setItem('Question', JSON.stringify(data));
    let questiondata = localStorage.getItem('Question');
    console.log(questiondata);
    let displayData = document.getElementById("display");
    let h1 = document.createElement("h1");
    h1.textContent = questiondata.question;
    displayData.appendChild(h1);

    let createInput = document.createElement("div");
    createInput.classList.add("input-radio");
    createInput.style.width = "98%";
    appearQuetion.appendChild(createInput);


    let createDivinput = document.createElement("div");
    createDivinput.classList.add("input-r");
    createInput.appendChild(createDivinput);

    let createInputQestion = document.createElement("input");
    createInput.classList.add("add-question");
    createInputQestion.type = "text";
    createInputQestion.placeholder = "QUESTION";
    createInputQestion.style.background = "grey";
    createInputQestion.style.width = "58%";
    createDivinput.appendChild(createInputQestion);
    let createQestion = document.createElement("br");
    createDivinput.appendChild(createQestion);
    let inputTypeRadio = document.createElement("input");
    inputTypeRadio.type = "radio";
    createDivinput.appendChild(inputTypeRadio);

    let label = document.createElement("label");
    // label.type = "text";
    label.classList.add("add-option");
    createDivinput.appendChild(label);


    let inputInLabel = document.createElement("input");
    inputInLabel.classList.add("add-option-answer");
    inputInLabel.id = "addOther";
    inputInLabel.type = "text";
    inputInLabel.placeholder = "answer";
    createDivinput.appendChild(inputInLabel);

    let createBr = document.createElement("br");
    createDivinput.appendChild(createBr);
    let inputTypeRadio1 = document.createElement("input");
    inputTypeRadio1.type = "radio";
    createDivinput.appendChild(inputTypeRadio1);

    let inputInLabel1 = document.createElement("input");
    inputInLabel1.classList.add("add-option-answer");
    inputInLabel1.id = "addOther";
    inputInLabel1.type = "text";
    inputInLabel1.placeholder = "answer";
    createDivinput.appendChild(inputInLabel1);

    // -------------------create-hr-----------
    let hr = document.createElement("hr");
    createDivinput.appendChild(hr);
    hr.style.width = "100%";

    // ---------------create button delete one more------------ 

    let buttonAddOption = document.createElement("div");
    buttonAddOption.classList.add("add-button");
    buttonAddOption.style.display = "flex";
    buttonAddOption.style.display = "space-between";
    createInput.appendChild(buttonAddOption);
    let divDeleteAdd = document.createElement("div");
    buttonAddOption.appendChild(divDeleteAdd);

    let buttonAddOption1 = document.createElement("button");
    buttonAddOption1.textContent = "delete";
    buttonAddOption1.classList.add("btn-html");
    buttonAddOption1.classList.add("btn-option");
    divDeleteAdd.appendChild(buttonAddOption1);

    let buttonAdd = document.getElementById("btn-add");
    divDeleteAdd.appendChild(buttonAdd);
    console.log(createInput)
}

function startQuiz(e){
    e.preventDefault();
    getQuiz.style.display="block";
    createQuiz.style.display="none";
}


const btnDisplayQuiz = document.getElementById("start-quiz");
btnDisplayQuiz.addEventListener("click", startQuiz);

const buttonDisplay = document.getElementById("creatge-quiz");
buttonDisplay.addEventListener("click", displayQuestion);
