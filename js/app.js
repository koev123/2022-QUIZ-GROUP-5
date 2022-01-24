/*   link id or class from html to js recognize each  */
// --------------chansok---------------
let title = document.getElementById("title");
let passage = document.getElementById("passage");
let answers = document.getElementsByName('answer');
let addRadio = document.getElementsByClassName("add-radio");
let enterQuestion = document.querySelector(".add-question");

let answerKey1 = document.querySelector('#answerKey1');
let answerKey2 = document.querySelector('#answerKey2');
let answerKey3 = document.querySelector('#answerKey3');

let getAddOption = document.getElementsByClassName("add-option-answer");

let appearQuetion = document.getElementById("display");
// 
let createQuiz=document.getElementById("createQuiz");
let getQuiz = document.getElementById("displayQuiz");
getQuiz.style.display="none";

/*   all question that user input will be display on DOM */
function displayQuestion(e) {
    e.preventDefault();
    // when user click this function start quiz will be disappear
    getQuiz.style.display="none";
    // when user click this function start quiz will be appear
    createQuiz.style.display="block";
    // all data user input will be store on Local Storage
    let data = {
        question: enterQuestion.value,
        answer1: answerKey1.value,
        answer2: answerKey2.value
    }
    console.log("data",data);
    localStorage.setItem('Question', JSON.stringify(data));
    let questiondata = localStorage.getItem('Question');
    console.log(questiondata);


    /*   div that cover input radio and answer */
    let divCoverInput = document.createElement("div");
    divCoverInput.classList.add("input-radio");
    divCoverInput.style.width = "98%";
    divCoverInput.style.paddingBottom="48px";
    appearQuetion.appendChild(divCoverInput);

    //create div class input to cover all input radio
    let createDivinput = document.createElement("div");
    createDivinput.classList.add("input-r");
    divCoverInput.appendChild(createDivinput);

    /*    create input for user can input      */
    let createInputQestion = document.createElement("ul");
    divCoverInput.classList.add("add-question");
    createInputQestion.textContent=enterQuestion.value;
    createInputQestion.style.background = "grey";
    createInputQestion.style.width = "58%";
    createDivinput.appendChild(createInputQestion);

    //create tag br for break line down 
    let createQestion = document.createElement("br");
    createDivinput.appendChild(createQestion);
    let radioAnswer1 = document.createElement("input");
    radioAnswer1.name="answer";
    radioAnswer1.type = "radio";
    createDivinput.appendChild(radioAnswer1);

    let label = document.createElement("label");
    label.textContent=answerKey1.value;
    label.classList.add("add-option");
    createDivinput.appendChild(label);

    let createBr = document.createElement("br");
    createDivinput.appendChild(createBr);
    // create easy user click
    let radioAnswer2 = document.createElement("input");
    radioAnswer2.type = "radio";
    radioAnswer2.name="answer";
    createDivinput.appendChild(radioAnswer2);

    let label2 = document.createElement("label");
    label2.textContent=answerKey2.value;
    label2.classList.add("add-option");
    createDivinput.appendChild(label2);

    let createBr3 = document.createElement("br");
    createDivinput.appendChild(createBr3);
    // create easy user click
    let radioAnswer3 = document.createElement("input");
    radioAnswer3.type = "radio";
    radioAnswer3.name="answer";
    createDivinput.appendChild(radioAnswer3);

    let label3 = document.createElement("label");
    label3.textContent=answerKey3.value;
    label3.classList.add("add-option");
    createDivinput.appendChild(label3);

    // -------------------create-hr to make style in DOM form -----------
    let hr = document.createElement("hr");
    createDivinput.appendChild(hr);
    hr.style.width = "100%";

    // ---------------create button delete one more------------ 

    let buttonAddOption = document.createElement("div");
    buttonAddOption.classList.add("add-button");
    divCoverInput.appendChild(buttonAddOption);
    let divDeleteAdd = document.createElement("div");
    buttonAddOption.appendChild(divDeleteAdd);
    
    // user for delete question when user input wrong and want to correct
    let buttonAddOption1 = document.createElement("button");
    buttonAddOption1.textContent = "delete";
    buttonAddOption1.classList.add("btn-delete");
    buttonAddOption1.classList.add("btn-html");
    divDeleteAdd.appendChild(buttonAddOption1);
    let object = {};
    object["question"]=enterQuestion.value;
    object["choices"]=[answerKey1.value,answerKey2.value];
    addQuestion.push(object);
    
}
let addQuestion=[];
console.log(addQuestion);
/*  where user can quiz  */
function startQuiz(e){
    e.preventDefault();
    // when user click this function start quiz will be appear
    getQuiz.style.display="block";
    // when user click this function start quiz will be disappear
    createQuiz.style.display="none";
}

/*button user click link to start quiz */
const btnDisplayQuiz = document.getElementById("start-quiz");
btnDisplayQuiz.addEventListener("click", startQuiz);

/*button user click link to create quiz */
const buttonDisplay = document.getElementById("btn-add");
buttonDisplay.addEventListener("click", displayQuestion);
