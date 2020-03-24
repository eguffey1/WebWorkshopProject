function provideHint1() {
  var modFirst = document.getElementById("a");
  var hint1 = document.createTextNode("Must contain only 2 or more letters");
  while (modFirst.hasChildNodes()) {
    modFirst.removeChild(modFirst.lastChild);
  }
  modFirst.appendChild(hint1);
}
function provideHint3() {
  var modEmail = document.getElementById("c");
  var hint3 = document.createTextNode("You must follow the pattern: example@example.com.");
  while (modEmail.hasChildNodes()) {
    modEmail.removeChild(modEmail.lastChild);
  }
  modEmail.appendChild(hint3);
}
function validateFirst() {
  var firstResult = document.forms["validation"]["firstname"].value;
  var firstReg = /[a-zA-Z]{2}/;
  var firstTest = firstReg.test(firstResult);
  var modFirst = document.getElementById("a");
  
  if (firstTest == false || firstResult == "") {
    while (modFirst.hasChildNodes()) {
      modFirst.removeChild(modFirst.lastChild);
    }
      var icon = document.createElement("img");
      icon.setAttribute('src', 'img/x.png');
      var infoText = document.createTextNode(" Please enter your name");
      modFirst.appendChild(icon);
      modFirst.appendChild(infoText);
      modFirst.style.color = 'red';
    return false;

  } else {
    while (modFirst.hasChildNodes()) {
      modFirst.removeChild(modFirst.lastChild);
    }
      var icon = document.createElement("img");
      icon.setAttribute('src', 'img/checkmark.png');
      var infoText = document.createTextNode(" Good!");
      modFirst.appendChild(icon);
      modFirst.appendChild(infoText);
      modFirst.style.color = 'green';
  }
}

function validateEmail() { 
  var emailResult = document.forms["validation"]["email"].value;
  var emailReg = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
  var emailTest = emailReg.test(emailResult);
  var modFirst = document.getElementById("c");

  if (emailTest == false || emailResult == "") {
    while (modFirst.hasChildNodes()) {
      modFirst.removeChild(modFirst.lastChild);
    }
      var icon = document.createElement("img");
      icon.setAttribute('src', 'img/x.png');
      var infoText = document.createTextNode(" You need to enter your email properly");
      modFirst.appendChild(icon);
      modFirst.appendChild(infoText);
      modFirst.style.color = 'red';
    return false;

  } else {
    while (modFirst.hasChildNodes()) {
      modFirst.removeChild(modFirst.lastChild);
    }
      var icon = document.createElement("img");
      icon.setAttribute('src', 'img/checkmark.png');
      var infoText = document.createTextNode(" Good!");
      modFirst.appendChild(icon);
      modFirst.appendChild(infoText);
      modFirst.style.color = 'green';
  }
}
function generateWelcome() {

  var welcomeName = document.forms["validation"]["firstname"].value;
  var welcomeMessageLoc = document.getElementById('validation');
  var welcomeMessage = document.createTextNode("Thanks, " + welcomeName + "!" +  " We appreciate you reaching out, and we will send you an email shortly");
  welcomeMessageLoc.appendChild(welcomeMessage);
  welcomeMessageLoc.setAttribute('style', 'text-align: center;');
  return false;
}
