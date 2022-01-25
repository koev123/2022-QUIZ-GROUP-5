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
    form.id="from-display";
    form.classList.add("title");
    console.log(form);
    for(let i=0;i<questions.length;i++){
        // create html element follow your mock up
        // ul create ul cover all input
        let ul =document.createElement("ul");
        ul.classList.add("enter-question");
        form.appendChild(ul);
        let li = document.createElement("li");
        ul.appendChild(li);
        // div cover all input and label that user input
        let divCoverRadio = document.createElement("div");
        divCoverRadio.classList.add("d-flex");
        ul.appendChild(divCoverRadio);

        //radio append answer as radio
        let radio1 = document.createElement("input");
        radio1.type="radio";
        radio1.name="answer";
         //create label for get answer 1 by index
        let label1= document.createElement("label");
        li.textContent= questions[i].Question;
        label1.textContent=questions[i].Choice[0];
        divCoverRadio.appendChild(radio1);
        divCoverRadio.appendChild(label1);
        
        //radio append answer as radio
        let radio2 = document.createElement("input");
        radio2.type="radio";
        radio2.name="answer";
         //create label for get answer 2 by index
        let label2= document.createElement("label");
        li.textContent= questions[i].Question;
        label2.textContent=questions[i].Choice[1];
        divCoverRadio.appendChild(radio2);
        divCoverRadio.appendChild(label2);
        
        //radio append answer as radio
        let radio3 = document.createElement("input");
        radio3.type="radio";
        radio3.name="answer";
        //create label for get answer 1 by index
        let label3= document.createElement("label");
        li.textContent= questions[i].Question;
        label3.textContent=questions[i].Choice[2];
        divCoverRadio.appendChild(radio3);
        divCoverRadio.appendChild(label3);
        
        let hr = document.createElement("hr");
        ul.appendChild(hr);
        let btnDelete = document.createElement("button");
        btnDelete.textContent="Delete";
        btnDelete.classList.add("delete");
        ul.appendChild(btnDelete);
    }
    // append your element to DOM tree
    let getDisplay = document.getElementById("from-display");
    if (getDisplay){
        getDisplay.remove();
    }
    appearQuestion.appendChild(form);
}
/*       store data user input  */
let questions = [];
console.log(questions);
//button display question
let btnDisplayQuestion = document.getElementById("add-display");
btnDisplayQuestion.addEventListener("click",displayQuestion)
//button user add question
let btnAddQuestion = document.getElementById("add-question");
btnAddQuestion.addEventListener("click",addQuestion);