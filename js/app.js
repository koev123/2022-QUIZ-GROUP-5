/*
To add the question the list of questions
*/
/*                   koev                */
// none start quiz
let getStartQiuiz = document.getElementById("do-quiz");
let getEdit = document.getElementById("edit-question");
getStartQiuiz.style.display="none";
getEdit.style.display="none";
//hide bg
let hidebg=document.getElementById('pictures');
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
// when user click on editQuiz show edit Quiz
// -----------corrrection answer when user play ----------
let getCorrection1 = document.getElementsByName("answer1");
let getCorrection2 = document.getElementsByName("answer2");
let getCorrection3 = document.getElementsByName("answer3");
let getCorrection4 = document.getElementsByName("answer4");
let getCorrection5 = document.getElementsByName("answer5");
let getCorrection6 = document.getElementsByName("answer6");
let getCorrection7 = document.getElementsByName("answer7");
let getCorrection8 = document.getElementsByName("answer8");
let getCorrection9 = document.getElementsByName("answer9");
let getCorrection10 = document.getElementsByName("answer10");
/* -- correct answers when click ----*/
function correction(){
    let correct1=document.getElementById("correct1");
    let correct2=document.getElementById("correct2");
    let correct3=document.getElementById("correct3");
    let correct4=document.getElementById("correct4");
    let correct5=document.getElementById("correct5");
    let correct6=document.getElementById("correct6");
    let correct7=document.getElementById("correct7");
    let correct8=document.getElementById("correct8");
    let correct9=document.getElementById("correct9");
    let correct10=document.getElementById("correct10");
    // score-=1;
    for(let i=0;i<getCorrection1.length;i++){
        let score=0;
        if(getCorrection1[1].checked){
            correct1.textContent="correct: 1";
            score++;
        }
        else{
            correct1.textContent="Incorrect: 0 ;   S + V2 + Obj";
        }
        if(getCorrection2[2].checked){
            correct2.textContent="correct: 1";
            score++;
        }
        else{
            correct2.textContent="Incorrect: 0 ;  went";
        }
        if(getCorrection3[1].checked){
            correct3.textContent="correct: 1";
            score++;
        }
        else{
            correct3.textContent="Incorrect: 0 ; didn't";
        }
        if(getCorrection4[1].checked){
            correct4.textContent="correct: 1";
            score++;
        }
        else{
            correct4.textContent="Incorrect: 0 ; did";
        }
        if(getCorrection5[2].checked){
            correct5.textContent="correct: 1";
            score++;
        }
        else{
            correct5.textContent="Incorrect: 0 ; Did";
        }
        if(getCorrection6[2].checked){
            correct6.textContent="correct: 1";
            score++;
        }
        else{
            correct6.textContent="Incorrect: 0 ;  work";
        }
        if(getCorrection7[0].checked){
            correct7.textContent="correct: 1";
            score++;
        }
        else{
            correct7.textContent="Incorrect: 0  ;   happened and finished in the past";
        }
        if(getCorrection8[2].checked){
            correct8.textContent="correct: 1";
            score++;
        }
        else{
            correct8.textContent="Incorrect: 0  ;    Did + S + V1(base form) +Obj?";
        }
        if(getCorrection9[3].checked){
            correct9.textContent="correct: 1";
            score++;
        }
        else{
            correct9.textContent="Incorrect: 0  ;   S + did + not + V1(base form) + Obj";
        }
        if(getCorrection10[0].checked){
            correct10.textContent="correct: 1";
            score++;
        }
        else{
            correct10.textContent="Incorrect: 0  ;  finished";
        }
        let getTotalScore=document.getElementById("totalScore");
        getTotalScore.textContent=score;
    }

}
let submit = document.getElementById("submit-quiz");
submit.addEventListener("click",correction);



function editQuiz(e){
    e.preventDefault();
    getEdit.style.display="block";
    getStartQiuiz.style.display="none";
    hidebg.style.display='none';
}
//wheb user click on startQuiz show start quiz
function startQuiz(e){
    e.preventDefault();
    getEdit.style.display="none";
    getStartQiuiz.style.display="block";
    hidebg.style.display="none";
    btnEditQuiz.style.display="none";
}


//button user add question
let btnAddQuestion = document.getElementById("add-question");
btnAddQuestion.addEventListener("click",addQuestion);
//button  edit quiz
let btnEditQuiz= document.getElementById("btn-edit");
btnEditQuiz.addEventListener("click",editQuiz);
//button start quiz
let btnStartQuiz = document.getElementById("btn-quiz");
btnStartQuiz.addEventListener("click",startQuiz);