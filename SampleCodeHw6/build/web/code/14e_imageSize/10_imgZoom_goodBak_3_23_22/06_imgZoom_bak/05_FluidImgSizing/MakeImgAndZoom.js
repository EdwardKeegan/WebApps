function MakeImgAndZoom(picFileName) {

    function moveLens(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();

        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;

            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();

            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;

            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x: x, y: y};
        } // getCursorPos


        /*get the cursor's x and y positions:*/
        var pos = getCursorPos(e);

        /*calculate the position of the cursor w.r.t. the lens:*/
        var x = pos.x - (lens.offsetWidth / 2);
        var y = pos.y - (lens.offsetHeight / 2);

        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) {
            x = img.width - lens.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > img.height - lens.offsetHeight) {
            y = img.height - lens.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";

        /*display what the lens "sees":*/
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    } // moveLens

    // cannot call imageZoom until the component has been placed on the page (and sizes are known).
    function imageZoom() { // should be called setSizes....

        // when getting styling from a style sheet, you have to use getComputedStyle
        var imgStyle = getComputedStyle(img);
        var imgHeight = imgStyle.getPropertyValue("height");

        // *** NEW: set result div to be square, the same heigh as the image that's being zoomed
        result.style.height = imgHeight;
        result.style.width = imgHeight;

        // this code now only sets the size of the result div that shows (bigger) that 
        // portion of the image that the lens is over. 

        // Set cx to "how many times wider the result div is than the lens"
        // Set cy to "how many times taller the result div is than the lens"        
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        // offsetWidth returns the viewable width of an element (in pixels) 
        // including padding, border, and scrollbar, but not margin.

        /*set background properties for the result DIV:*/
        result.style.backgroundSize = img.height + "px " + img.height;
        // (img.width * cx) + "px " + (img.height * cy) + "px";

    } // imageZoom

    // Entry point for MakeImgAndZoom

//    /* trying to make these HTML tags:
//     *  
//     <div class='imgAndZoom'>
//          <div class="img-zoom-container">
//              <img id="myimage" src="https://www.w3schools.com/howto/img_girl.jpg" width="300" height="240">
//              <div id="myresult" class="img-zoom-result"></div>
//          </div>
//     </div>
//     */


    var cx; // will hold: "how many times wider the result div is than the lens"
    var cy; // will hold: "how many times taller the result div is than the lens"   

    var imgAndZoom = document.createElement("div");
    imgAndZoom.classList.add("imgAndZoom");

    var imgZoomContainer = document.createElement("div");
    imgZoomContainer.classList.add("img-zoom-container");
    imgAndZoom.appendChild(imgZoomContainer);

    // create lens (small div inside image that moves with cursor) 
    var lens = document.createElement("div");
    lens.setAttribute("class", "img-zoom-lens");
    imgZoomContainer.appendChild(lens);

    // create img that will be zoomed
    var img = document.createElement("img");
    img.src = picFileName; // passed as input parameter to MakeImgAndZoom
//    img.width = width;
//    img.height = height;
    img.classList.add("origPic");
    imgZoomContainer.appendChild(img);

    // create div where zoomed portion of the image will show 
    // (using background image). 
    var result = document.createElement("div");
    result.classList.add("img-zoom-result");
    result.style.backgroundImage = "url('" + picFileName + "')";
    imgZoomContainer.appendChild(result);


    // whenever the cursor is moved over the image or the lens, move the lens
    // and adjust what's being shown in the result div
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);

    // add this also for touch screens
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    // wait 200 milliseconds (plenty of time for component to be placed on the page.
    // then add zoom effect (builds lens, adds mouse move event handling). 
    setTimeout(imageZoom, 200);
    window.addEventListener('resize', imageZoom);

    return imgAndZoom;

} // MakeImgAndZoom