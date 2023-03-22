function MakeObjListNav(objList, selectedColor) {

    function MakeLink(obj) {
        var link = document.createElement("div");
        link.classList.add("link"); // connects this div to styling in the css style sheet
        link.innerHTML = obj.title;
        link.onclick = function () {
            // "clear" the "selected" BG color of all the links
            var linkList = left.getElementsByClassName("link");
            for (var i=0; i<linkList.length; i++){
                linkList[i].style.backgroundColor = "transparent";
            }
            // set BG color of the selected link
            link.style.backgroundColor = selectedColor;
            
            // populate right side with the object matching the clicked left nav link.
            right.innerHTML = "";
            right.appendChild(MakeEle(obj));
        };
        return link;
    }

    function MakeEle(obj) {

        var item = document.createElement("div");
        item.classList.add("item");

        // title
        var h2 = document.createElement("h2");
        h2.innerHTML = obj.title;
        item.appendChild(h2);

        // image
        var image = document.createElement("img");
        item.appendChild(image);
        image.src = obj.imageFile;

        return item;
    }

    // ENTRY POINT
    var container = document.createElement("div");
    container.classList.add("objListNav");

    var left = document.createElement("div");
    left.innerHTML = "Left Nav<br/>(click an entry):<br/><br/>";
    left.classList.add("left");
    container.appendChild(left);


    var right = document.createElement("div");
    right.classList.add("right");
    right.innerHTML = "Right Content Area<br/>(fills when you click on a Left Nav Entry)<br/><br/>";
    container.appendChild(right);

    for (var i = 0; i < objList.length; i++) {
        left.appendChild(MakeLink(objList[i]));
    }

    return container;
}  