// create global object (named same as js file) so html page can access it.
var modalFw = {};

// This is an IIFE, an immediately invoked function expression.
// The IIFE adorns the public object with a public method (alert).
(function () {

    // create div for modal window and attach it to the <body> tag. 
    // The initial styling (set by "modalStyle" class rule in modalFw.css) 
    // makes the div initially invisible.
    var modalWindow = document.createElement("div");
    modalWindow.className = "modalStyle";
    var bList = document.getElementsByTagName("body");
    bList[0].appendChild(modalWindow);
    hide(modalWindow);

    function hide(ele) {
        ele.style.top = "-500px";
    }

    function show(ele) {
        ele.style.top = "150px";
    }

    // create public method that can be used by the HTML coder.
    modalFw.alert = function (message) {
        show(modalWindow);
        console.log("function modalFw.alert was called with message " + message);

        modalWindow.innerHTML = "";

        // add "X" button that can close the modal window
        var xButton = document.createElement("span");
        xButton.className = "x";
        xButton.innerHTML = "&times";
        xButton.onclick = function () {
            hide(modalWindow);
        };
        modalWindow.appendChild(xButton);

        // add message area
        var messageArea = document.createElement("p");
        modalWindow.appendChild(messageArea);
        messageArea.innerHTML = message;

        show(modalWindow);
    };

}());  // the end of the IIFE. the () invokes it... 
// the last ) wraps the whole function definition - see starting ( at top.  