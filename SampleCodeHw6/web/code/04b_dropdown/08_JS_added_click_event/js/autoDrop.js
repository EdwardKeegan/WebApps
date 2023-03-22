/*
 * 
 * To the HTML coder who is using this code: 
 * You must organize your HTML tags such that each dropContent
 * is the second div in the container that holds it and it's 
 * dropHeader. 
 * 
 */

function autoDrop(dropHeaderClass, hideClass, showClass) {

    var dropHeaders = document.getElementsByClassName(dropHeaderClass);
    for (var i = 0; i < dropHeaders.length; i++) {
        dropHeaders[i].onclick = function () {

            var clickedEle = this;
            console.log(clickedEle);
            // console.log("clickedEle on next line");
            // console.log(clickedEle);

            // getElementsByTagName returns an array of all the elements (from the starting 
            // point which is the parent of the clicked div. Selecting the [1] element should get 
            // us to the drpContent div. 
            var nextEle = clickedEle.parentElement.getElementsByTagName("div")[1];
            // console.log("nextEle on next line");
            // console.log(nextEle);

            if (nextEle.classList.contains(showClass)) {
                hide(nextEle);
            } else {
                show(nextEle);
            }


            /* Note: I could have just added and removed class showClass (and not even have a hideClass class) 
             * but I wanted to also animate the dropcontents as they leave the screen...  */
            function hide(ele) {
                ele.classList.remove(showClass);
                ele.classList.add(hideClass);
            }

            function show(ele) {
                ele.classList.remove(hideClass);
                ele.classList.add(showClass);
            }

        }; // end onclick event function
    } // end for loop
} // end autoDrop