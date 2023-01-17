
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
   const myName = prompt("Please enter your name.");
   if (!myName) {
     setUserName();
   } else {
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mycology findings - here is what I've found, ${myName}`;
   }
 }
 if (!localStorage.getItem("name")) {
   setUserName();
 } else {
   const storedName = localStorage.getItem("name");
   myHeading.textContent = `Mycology findings - here is what I've found, ${storedName}`;
 }
 myButton.onclick = () => {
   setUserName();
 };
