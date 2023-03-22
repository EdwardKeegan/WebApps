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
        result.style.backgroundPosition = "-" + (x * xMagnifyRatio) + 
                "px -" + (y * yMagnifyRatio) + "px";
    } // moveLens



    // This function used to be called "imageZoom", but it's now all about sizing. 
    function setSizes() {
        
        // when getting styling from a style sheet, you have to use getComputedStyle
        var imgStyle = getComputedStyle(img);
        var imgHeight = imgStyle.getPropertyValue("height");
        
        // *** NEW: set result div to be square, the same heigh as the image that's being zoomed
        result.style.height = imgHeight; 
        result.style.width = imgHeight;
        
        console.log("imageZoom height: "+result.style.height+", width: "+result.style.width);

        // this code now only sets the size of the result div that shows (bigger) that 
        // portion of the image that the lens is over. 

        // cx and cy renamed to better name...
        // Set xMagnifyRatio to "how many times wider the result div is than the lens"
        // Set yMagnifyRatio to "how many times taller the result div is than the lens"        
        xMagnifyRatio = result.offsetWidth / lens.offsetWidth;
        yMagnifyRatio = result.offsetHeight / lens.offsetHeight;
        // offsetWidth returns the viewable width of an element (in pixels) 
        // including padding, border, and scrollbar, but not margin.

        /*set background properties for the result DIV:*/
        result.style.backgroundSize = (img.width * xMagnifyRatio) + "px " 
                + (img.height * yMagnifyRatio) + "px";

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


    var xMagnifyRatio; // will hold: "how many times wider the result div is than the lens"
    var yMagnifyRatio; // will hold: "how many times taller the result div is than the lens"   

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
    img.classList.add("zoomPic"); // *** NEW: take sizes from CSS, not from input parms.
    imgZoomContainer.appendChild(img);

    // create div where zoomed portion of the image will show 
    // (using background image). 
    var result = document.createElement("div");
    result.classList.add("img-zoom-result");
    result.style.backgroundImage = "url('" + picFileName + "')";
    // size of result will be set by function imageZoom
    imgZoomContainer.appendChild(result);
    
    var clear = document.createElement("div");
    clear.classList.add("clear");
    imgAndZoom.appendChild(clear);

    // whenever the cursor is moved over the image or the lens, move the lens
    // and adjust what's being shown in the result div
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);

    // add this also for touch screens
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    // After the component is on the page, do whatever needs to know about image size. 
    setTimeout(setSizes, 200);
    
    // Then if the window is resized, call that same code again (for any size updates)
    window.addEventListener('resize', setSizes);

    return imgAndZoom;

} // MakeImgAndZoom