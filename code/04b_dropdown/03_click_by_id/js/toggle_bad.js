function toggle_bad (toggleId) {

    var toggleEle = document.getElementById(toggleId);

    if (toggleEle.classList.contains("show")) {
        hide(toggleEle);
    } else {
        show(toggleEle);
    }


    /* Note: I could have just added and removed class "show" (and not even have a "hide" class) 
     * but I wanted to also animate the dropcontents as they hide...  */
    function hide(ele) {
        ele.classList.remove("show");
        ele.classList.add("hide");
    }

    function show(ele) {
        ele.classList.remove("hide");
        ele.classList.add("show");
    }

} // end function toggle