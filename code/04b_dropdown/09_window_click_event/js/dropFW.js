function dropFW (dropHeaderClass, dropContentClass, hideClass, showClass) {
    
    window.onclick = function (event) {

        var clickedEle = event.target;  // this is the DOM element (anywhere on page) that was clicked.
        // console.log("clickedEle on next line");
        // console.log(clickedEle);

        if (clickedEle.classList.contains(dropHeaderClass)) {

            var message = "You clicked a Drop Down Header. \n" +
                    "Here, you would implement code to toggle (hide/show) the associated \n" +
                    "Drop Down Content (any any other possibly open Drop Down Contents. \n" +
                    "This sample code just has all Drop Contents initially shown \n" +
                    "so we can demo closing them all.";

            alert(message);


        } else {

            // This is when they click anywhere on the page (not a dropHeader).
            var dropContentList = document.getElementsByClassName(dropContentClass);
            for (var i = 0; i < dropContentList.length; i++) {
                dropContentList[i].classList.remove(showClass);
                dropContentList[i].classList.add(hideClass);
            }
        }

        // private function defined inside of another function
        function hide(ele) {
            ele.classList.remove(showClass);
            ele.classList.add(hideClass);
        }

        // private function defined inside of another function
        function show(ele) {
            ele.classList.remove(hideClass);
            ele.classList.add(showClass);
        }
    };  // window.onclick function 

}