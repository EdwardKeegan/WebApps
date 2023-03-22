function MakeCar (theName, theCondition, thePrice, theColor, hoverColor) {

    var carObj = document.createElement("div"); // get reference to DOM object with the given id
    carObj.name = theName; // first use of “name” creates custom public property
    carObj.condition = theCondition; // first use of “condition” creates custom public property
    carObj.price = thePrice; // create custom public property “price”

    carObj.display = function () {           // create custom method “display”
        // make the current properties visible on the page
        carObj.innerHTML = "Car: " + carObj.name + 
                "<br/>Condition: " + carObj.condition + "<br/>Price: " +
                formatCurrency(carObj.price);
        // To set a CSS style, reference the DOM object add ".style" then specify 
        // the CSS style, but dont' use dashes. For example, 
        // background-color becomes backgroundColor.
        carObj.style.backgroundColor = theColor;
    };
    carObj.onmouseover = function () {
        console.log("onmouseover");
        carObj.style.backgroundColor = hoverColor;
    };
    carObj.onmouseout = function () {
        console.log("onmouseout");
        carObj.style.backgroundColor = theColor;
    };
    carObj.log = function () {
        console.log("Condition of " + carObj.name +
                " is " + carObj.condition + " and price is $" + carObj.price);
    };
    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    carObj.display(); // show initial properties on the page 
    return carObj;
}