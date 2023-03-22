function MakeCar(theName, theCondition, thePrice) {

    // NOW the carObj has a UI because it is a DOM element (a div). 
    var carObj = document.createElement("div");
    carObj.name = theName;                         // first use of property "name" creates custom public property
    carObj.condition = theCondition;               // adds custom public property “condition” 
    carObj.price = thePrice;                       // adds custom public property “price”

    carObj.display = function ( ) {                // adds custom public method “display”
        // make the current properties visible on the page
        carObj.innerHTML = "Car: " + carObj.name + 
                "<br/>Condition: " + carObj.condition +
                "<br/> Price: $" + carObj.price;
    };

    carObj.setCondition = function (newCondition) { // adds custom public method “setCondition”
        carObj.condition = newCondition;
        carObj.display(); // show updated property on the page
    };

    carObj.changePrice = function (changeRate) { // create custom public method “changePrice”
        carObj.price = carObj.price * (1 + changeRate);
        carObj.display(); // show updated price on the page
    };

    carObj.log = function () { // create custom public method “log”
        console.log("Condition of " + carObj.name + " is " + carObj.condition +
                " and price is $" + carObj.price);
    };

    carObj.display();  // call the display fn to show initial properties on the page 
    return carObj;
}
