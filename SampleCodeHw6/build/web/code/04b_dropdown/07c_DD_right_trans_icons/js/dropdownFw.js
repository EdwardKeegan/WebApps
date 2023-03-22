// Sally's JS naming convention: every JS file shall be named for the single funtion 
// or object that is defined within the file (helps to organize and find code).

// Assumptions: The HTML page has referenced dropdown.css in which there are Initialize the drop down framework by calling function dropDownFw (below). So that the framework 
// has no dependencies on outside code, you pass in the name you want for your dropdown header 
// style, the drop down content style and what position you want (off screen to the right) for your 
// drop contents to zoom in from. 



"use strict"; // We dont want the browser auto-declaring  global variable if we misspell a variable name.

function dropdownFw (dropHeaderStyle, dropContentStyle, hideStyle, showStyle) {



    window.onclick = function (event) {

        var clickedEle = event.target;  // this is the DOM element (anywhere on page) that was clicked.
        // console.log("clickedEle on next line");
        // console.log(clickedEle);

        // if (clickedEle.className.includes(dropHeaderStyle)) { // both ways work...
        if (clickedEle.classList.contains(dropHeaderStyle)) {

            // get the dropContent that is associated with the clicked dropHeader. 
            var nextEle = clickedEle.parentElement.getElementsByClassName(dropContentStyle)[0];
            // console.log("nextEle on next line");
            // console.log(nextEle);

            if (nextEle.classList.contains(showStyle)) {
                hide(nextEle);
            } else {
                show(nextEle);       // show the one you want 
                hideExcept(nextEle); // but also close any other that may be open
            }
        } else {
            // This is when they click anywhere on the page (not a dropHeader).
            hideExcept(null); // hide all dropContents
        }


        function hide(ele) {
            ele.classList.remove(showStyle);
            ele.classList.add(hideStyle);
        }

        function show(ele) {
            ele.classList.remove(hideStyle);
            ele.classList.add(showStyle);

        }

        function hideExcept(ele) {
            console.log("hiding all drop contents except one");
            var dropContentList = document.getElementsByClassName(dropContentStyle);
            for (var i = 0; i < dropContentList.length; i++) {
                if (dropContentList[i] !== ele) {
                    hide(dropContentList[i]);
                }
            }
        } // hideExcept

    };  // window.onclick function 

}