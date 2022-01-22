// -------------------------somnak---------------------------
const getNav = document.querySelector("nav");
// ---------create tag li ul a ---------
const h2 = document.createElement("h2");
const divUl = document.createElement("div");
divUl.id = "menu";
const ul = document.createElement("ul");
const li = document.createElement("li");
const liEdit = document.createElement("li");
const liCreate = document.createElement("li");
const a = document.createElement("a");
const aEdit = document.createElement("a");
const aCreate = document.createElement("a");
h2.textContent = "Quiz";
a.href = "";
aEdit.href = "";
aCreate.href = "../pages/index.html";
a.textContent = "Start Quiz";
aEdit.textContent = "Edit Quiz";
aCreate.textContent = "Create Quiz";
li.appendChild(a);
liCreate.appendChild(aCreate);
liEdit.appendChild(aEdit);
ul.appendChild(li);
ul.appendChild(liCreate);
ul.appendChild(liEdit);
getNav.appendChild(h2);
getNav.appendChild(divUl);
divUl.appendChild(ul);
// ------------------------------------