function toggle_better (toggleId, hideClass, showClass) {
    var toggleEle = document.getElementById(toggleId);
    console.log("toggle classlist is "+toggleEle.classList);

    if (toggleEle.classList.contains(showClass)) {
        hide(toggleEle);
    } else {
        show(toggleEle);
    }

    /* Note: I could have just added and removed class "show" (and not even have a "hide" class) 
     * but I wanted to also animate the dropcontents as they hide...  */
    function hide(ele) {
        ele.classList.remove(showClass);
        ele.classList.add(hideClass);
    }

    function show(ele) {
        ele.classList.remove(hideClass);
        ele.classList.add(showClass);
    }

} // end function toggle