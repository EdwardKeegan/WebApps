
function MakeFruitList(objList) {

    var container = document.createElement("div");
    container.classList.add("fruitList");

    for (var i = 0; i < objList.length; i++) {
        var myDiv = document.createElement("div");
        myDiv.classList.add("objDiv");
        container.appendChild(myDiv);

        var heading = document.createElement("h3");
        heading.innerHTML = objList[i].fruit;
        myDiv.appendChild(heading);

        var myButton = document.createElement("button");
        myButton.innerHTML = "Click For Color";
        myDiv.appendChild(myButton);
        myButton.color = objList[i].color; // custom property
        myButton.heading = heading;   // custom property

        myButton.onclick = function () {
            // "this" means the button that was clicked, the button that 
            // has custom properties telling where the associated heading is, 
            // and what color should be used when the user clicks the button.
            this.heading.style.backgroundColor = this.color;
        };

    }

    return container;
} 