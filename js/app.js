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
    let getChoice4= document.getElementById("getChoice4");
    let getChoiceClass = document.getElementsByName("answer-input");
    // declear a variable as an object
    let object = {};
    
    // get the answer from input
    object["Question"]=getQuestion.value;
    object["Choice"]=[getChoice1.value,getChoice2.value,getChoice3.value,getChoice4.value];
    // loop get checked which one correct answer
    for (let i=0;i<getChoiceClass.length;i++){
        if(getChoiceClass[i].checked){
            object["answer"]=parseInt(i);
        }
    }
    // push this object to arrays
    questions.push(object);
    displayQuestion();
}
/*
To display the questions from the list
*/
let appearQuestion = document.getElementById("display-qustions");
function displayQuestion() {
    // e.preventDefault();
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

        let breakLine1 = document.createElement("br");
        divCoverRadio.appendChild(breakLine1)

         //create label for get answer 1 by index
        let label1= document.createElement("label");
        li.textContent= questions[i].Question;
        label1.textContent=questions[i].Choice[0];
        divCoverRadio.appendChild(label1);
        let breakLine2 = document.createElement("br");
        divCoverRadio.appendChild(breakLine2)
        
         //create label for get answer 2 by index
        let label2= document.createElement("label");
        li.textContent= questions[i].Question;
        label2.textContent=questions[i].Choice[1];
        divCoverRadio.appendChild(label2);
        
        let breakLine3 = document.createElement("br");
        divCoverRadio.appendChild(breakLine3)
        //create label for get answer 1 by index
        let label3= document.createElement("label");
        li.textContent= questions[i].Question;
        label3.textContent=questions[i].Choice[2];
        divCoverRadio.appendChild(label3);
        
        let breakLine4 = document.createElement("br");
        divCoverRadio.appendChild(breakLine4)
        //create label for get answer 1 by index
        let label4= document.createElement("label");
        li.textContent= questions[i].Question;
        label4.textContent=questions[i].Choice[3];
        divCoverRadio.appendChild(label4);

        let hr = document.createElement("hr");
        ul.appendChild(hr);
        let btnDelete = document.createElement("button");
        btnDelete.textContent="Delete";
        btnDelete.classList.add("delete");
        ul.appendChild(btnDelete);

        //create label for get answer 1 by index
        let label5 = document.createElement("label");
        label5.classList.add("correct-answer");
        li.textContent=questions[i].Question;
        let number=0;
        number=questions[i].answer;
        label5.textContent="Answer: "+questions[i].Choice[number];
        ul.appendChild(label5 );
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
//button user add question
let btnAddQuestion = document.getElementById("add-question");
btnAddQuestion.addEventListener("click",addQuestion);