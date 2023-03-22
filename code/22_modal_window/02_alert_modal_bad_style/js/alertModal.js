// BAD STYLE. Many global functions defined. Many global variables defined.
// Breaks the rule about naming the external JS file the same as the SINGLE FUNCTION 
// or SINGLE OBJECT that is defined in the JS file.

// The next code example in this series will show how to fix all these style problems.

function hide(ele) {
    ele.style.top = "-500px";
}

function show(ele) {
    ele.style.top = "150px";
}

// create div for modal window and attach it to the <body> tag. 
// The initial styling (set by "modalStyle" class rule in modalFw.css) 
// makes the div initially invisible.
var modalWindow = document.createElement("div");
modalWindow.className = "modalStyle";
var bList = document.getElementsByTagName("body");
bList[0].appendChild(modalWindow);

// add "X" button that can close the modal window
var xButton = document.createElement("span");
xButton.className = "x";
xButton.innerHTML = "&times";
xButton.onclick = function () {
    //hide(this.parentNode);
    hide(modalWindow);
};
modalWindow.appendChild(xButton);

// add message area
var messageArea = document.createElement("p");
modalWindow.appendChild(messageArea);

hide(modalWindow);


function alertModal(message) {

    console.log("function alertModal was called with message " + message);

    messageArea.innerHTML = message;

    show(modalWindow);

}