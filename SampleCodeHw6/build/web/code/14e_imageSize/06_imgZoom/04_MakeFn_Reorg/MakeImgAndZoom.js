function MakeImgAndZoom(picFileName, width, height) {

    function moveLens(e) { // same function just moved up as first private method.
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();


        // this function moved to become private fn moveLens since it's only 
        // called by moveLens. 
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
        result.style.backgroundPosition = "-" + (x * xMagnifyRatio) + "px -" + (y * yMagnifyRatio) + "px";
    } // moveLens

    // Removing everything from this function except for things that depend on knowing the 
    // size of the image... 
    function imageZoom() {

        // this code now only sets the size of the result div that shows (bigger) that 
        // portion of the image that the lens is over. 

        // Set xMagnifyRatio to "how many times wider the result div is than the lens"
        // Set yMagnifyRatio to "how many times taller the result div is than the lens"        
        xMagnifyRatio = result.offsetWidth / lens.offsetWidth;
        yMagnifyRatio = result.offsetHeight / lens.offsetHeight;
        // offsetWidth returns the viewable width of an element (in pixels) 
        // including padding, border, and scrollbar, but not margin.

        /*set background properties for the result DIV:*/
        result.style.backgroundSize = (img.width * xMagnifyRatio) + "px " + (img.height * yMagnifyRatio) + "px";

    } // imageZoom

    // ********* Entry point for MakeImgAndZoom *********

//    /* trying to make these HTML tags:
//     *  
//     <div class='imgAndZoom'>
//          <div class="img-zoom-container">
//              <div class="img-zoom-lens"></div>   <!-- you see this when you inspect the page -->
//              <img id="myimage" src="https://www.w3schools.com/howto/img_girl.jpg" width="300" height="240">
//              <div id="myresult" class="img-zoom-result"></div>
//          </div>
//     </div>
//     */


    var xMagnifyRatio; // (used to be called cx): "how many times wider the result div is than the lens"
    var yMagnifyRatio; // (used to be called cy): "how many times taller the result div is than the lens"   

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
    // next three lines taken from input parameters to MakeImgAndZoom
    img.src = picFileName; 
    img.width = width;
    img.height = height;
    imgZoomContainer.appendChild(img);

    // create div where zoomed portion of the image will show 
    // (using the same picture as background image). 
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

    // wait 200 milliseconds (plenty of time for component to be placed on the page)
    // then deal with things that need to know how big the image is. 
    setTimeout(imageZoom, 200);


    return imgAndZoom;

} // MakeImgAndZoom