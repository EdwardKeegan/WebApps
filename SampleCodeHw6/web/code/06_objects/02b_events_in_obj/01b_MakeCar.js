function MakeCar(theName, theCondition, thePrice) {

    var carObj = document.createElement("div"); // get reference to DOM object with the given id

    // private properties:
    var name = theName;
    var price = thePrice;

    // Let's leave this property as public, just for comparison.
    carObj.condition = theCondition;   // first use of “condition” creates custom public property

    // this is a private method, doesnt mater that it used the assignment statement style of function definition.
    var display = function ( ) {
        // make the current properties visible on the page
        carObj.innerHTML = "Car: " + name + "<br/> condition: " +
                carObj.condition + "<br/> price: " + formatCurrency(price);
    };

    carObj.setCondition = function (newCondition) { // create custom public method “setCondition”
        carObj.condition = newCondition;
        display(); // show updated property on the page
    };

    carObj.changePrice = function (changeRate) { // create custom public method “changePrice”
        price = price * (1 + changeRate);
        display(); // show updated price on the page
    };

    carObj.log = function () { // create custom public method “log”
        console.log("Condition of " + name + " is " + carObj.condition +
                " and price is " + formatCurrency(price));
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    display();  // call the display fn to show initial properties on the page 
    return carObj;
}