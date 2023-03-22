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
        myButton.fruitColor = objList[i].color; // custom property

        myButton.onclick = function () {
            var parent = this.parentElement;
            var theHeading = parent.getElementsByTagName("h3")[0];
            theHeading.style.backgroundColor = this.fruitColor;
        };

    }

    return container;
} 