function MakeImgAndZoom (picFileName, width, height) {

    // do not accept ids as input. 
    // instead accept a reference to the image and the result area (both DOM elements).
    function imageZoom (img, result) {

        var lens, cx, cy;

        // img = document.getElementById(imgID);
        // result = document.getElementById(resultID);

        /*create lens:*/
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        
        /*insert lens:*/
        img.parentElement.insertBefore(lens, img);
        
        /*calculate the ratio between result DIV and lens:*/
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        
        /*set background properties for the result DIV:*/
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);

        function moveLens(e) {
            var pos, x, y;
            
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            
            /*calculate the position of the lens:*/
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            
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
        }
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
    } // imageZoom

    // Entry point for MakeImgAndZoom

//     Trying to make HTML tags that are structured and classed as below:
//      
//     <div class='imgAndZoom'>
//          <div class="img-zoom-container">
//              <img id="myimage" src="https://www.w3schools.com/howto/img_girl.jpg" width="300" height="240">
//              <div id="myresult" class="img-zoom-result"></div>
//          </div>
//     </div>
//     */

    var imgAndZoom = document.createElement("div");
    imgAndZoom.classList.add("imgAndZoom");

    var imgZoomContainer = document.createElement("div");
    imgZoomContainer.classList.add("img-zoom-container");
    imgAndZoom.appendChild(imgZoomContainer);

    var myImage = document.createElement("img");
    myImage.src = picFileName; // passed as input parameter to MakeImgAndZoom
    myImage.width = width;
    myImage.height = height;
    imgZoomContainer.appendChild(myImage);

    var myResult = document.createElement("div");
    myResult.classList.add("img-zoom-result");
    imgZoomContainer.appendChild(myResult);

    // wait 200 milliseconds (plenty of time for component to be placed on the page.
    // then add zoom effect (builds lens, adds mouse move event handling). 
    setTimeout(makeItZoom, 200);

    function makeItZoom() {

        // Initiate zoom effect (like was done in the script on the HTML page)... 
        //  but pass in references to DOM elements, not ids...
        imageZoom(myImage, myResult);
    }

    return imgAndZoom;

} // MakeImgAndZoom