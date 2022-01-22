
// --------------chansok---------------
let title =document.getElementById("title");
let passage =document.getElementById("passage");
let enterQuestion = document.querySelector(".add-question");
let answers = document.getElementsByName('answer');
let addRadio = document.getElementsByClassName("add-radio");
let getAddOption =document.getElementsByClassName("add-option-answer");
let appearQuetion =document.getElementById("display");
/*    when user input question,so it will display question on DOM  */
function displayQuestion(e){
    e.preventDefault();
    console.log(title.value);
    console.log(passage.value);
    console.log(enterQuestion.value);

    let createInput = document.createElement("div");
    createInput.classList.add("input-radio");
    appearQuetion.appendChild(createInput);
    console.log(createInput);

    let createDivinput = document.createElement("div");
    createDivinput.classList.add("input-r");
    createInput.appendChild(createDivinput);

    let createInputQestion=document.createElement("input");
    createInput.classList.add("add-question");
    createInputQestion.type="text";
    createInputQestion.placeholder="QUESTION";
    createInputQestion.style.background="grey";
    createInputQestion.style.width="100%";
    createDivinput.appendChild(createInputQestion);
    
    let inputTypeRadio=document.createElement("input");
    inputTypeRadio.type="radio";
    createDivinput.appendChild(inputTypeRadio);
    
    let label = document.createElement("label");
    label.type="text";
    label.classList.add("add-option");
    createDivinput.appendChild(label);
    
    
    let inputInLabel = document.createElement("input");
    inputInLabel.classList.add("add-option-answer");
    inputInLabel.id="addOther";
    inputInLabel.type="text";
    inputInLabel.placeholder="answer";
    createDivinput.appendChild(inputInLabel);
    
    let createBr = document.createElement("br");
    createDivinput.appendChild(createBr);
    console.log(createDivinput);
    let inputTypeRadio1=document.createElement("input");
    inputTypeRadio1.type="radio";
    createDivinput.appendChild(inputTypeRadio1);

    let inputInLabel1 = document.createElement("input");
    inputInLabel1.classList.add("add-option-answer");
    inputInLabel1.id="addOther";
    inputInLabel1.type="text";
    inputInLabel1.placeholder="answer";
    createDivinput.appendChild(inputInLabel1);

    // -------------------create-hr-----------
    let hr = document.createElement("hr");
    createDivinput.appendChild(hr);
    hr.style.width="165%";
    
    // ---------------create button delete one more------------
    let divBtn = document.createElement("div");
    divBtn.classList.add("add-button");
    createInput.appendChild(divBtn);
    let btn = document.createElement("button");
    btn.classList.add("btn-html");
    btn.textContent="delete";
    let btn1 = document.createElement("button");
    btn1.classList.add("btn-html");
    btn1.textContent="+ add";
    btn1.id="btn-add";
    divBtn.appendChild(btn);
    divBtn.appendChild(btn1);


}

function addOther (e){
    e.preventDefault();
    console.log(title.value);
    console.log(passage.value);
    console.log(enterQuestion.value);

}
let buttonAddOption =document.getElementById("addOther");
buttonAddOption.addEventListener("click",addOther)

let button = document.getElementById("btn-add");
button.addEventListener("click",displayQuestion);
