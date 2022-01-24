/*
To add the question the list of questions
*/
function addQuestion(e) {
    e.preventDefault();
    // TODO
    // get the question from input
    let getQuestion = document.getElementById("getQuestion");
    
    // get the choice from input
    let getChoice1= document.getElementById("getChoice1");
    let getChoice2= document.getElementById("getChoice2");
    let getChoice3= document.getElementById("getChoice3");
    // declear a variable as an object
    let object = {};

    // get the answer from input
    object["Question"]=getQuestion.value;
    object["Choice"]=[getChoice1.value,getChoice2.value,getChoice3.value];
    object["answer"]=[3];

    // push this object to arrays
    questions.push(object);
}
let btnAddQuestion = document.getElementById("add-question");
btnAddQuestion.addEventListener("click",addQuestion);
/*
To display the questions from the list
*/
let appearQuestion = document.getElementById("display-qustions");
function displayQuestion(e) {
    e.preventDefault();
    //TODO
    // loop on questions list
    /*create form store all element from input */
    let form  = document.createElement("form");
    console.log(form);
    let ul =document.createElement("ul");
    form.appendChild(ul);
    let li = document.createElement("li");
    ul.appendChild(li);
    for(let i=0;i<questions.length;i++){
        let label1= document.createElement("label");
        li.textContent= questions[i].Question;
        label1.textContent+=questions[i].Choice[i]+"\n";
        // create html element follow your mock up
        let radio1 = document.createElement("input");
        radio1.type="radio";
        radio1.name="answer";
        ul.appendChild(radio1);
        ul.appendChild(label1);
    }

    // append your element to DOM tree
    appearQuestion.appendChild(form);
}

let questions = [];
console.log(questions);
let btnDisplayQuestion = document.getElementById("add-display");
btnDisplayQuestion.addEventListener("click",displayQuestion)