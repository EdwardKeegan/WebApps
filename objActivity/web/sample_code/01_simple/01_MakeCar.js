function MakeCar(theCondition, thePrice, style) {

    var carObj = document.createElement("div");
    carObj.classList.add(style);

    // condition is a public property (placed added after .carObj)
    carObj.condition = theCondition;          // first use of “condition” creates custom property

    // price is a private property (just declared within MakeCar).
    var price = thePrice;                  // create custom property “price”

    carObj.display = function ( ) {           // create custom method “display”

        // make the current properties visible on the page
        carObj.innerHTML = "Car condition: " + carObj.condition + "<br/> price: " +
                formatCurrency(price);
    };

    carObj.setCondition = function (newCondition) {
        carObj.condition = newCondition;
        carObj.display(); // show updated property on the page
    };

    carObj.changePrice = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing price by this rate " + n);
        price = price * (1 + n);
        carObj.display(); // show updated price on the page
    };

    carObj.log = function () {
        console.log("Condition of car with id " + carObj.id + " is " + carObj.condition + " and price is $" + carObj.price);
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }



    carObj.display(); // show initial properties on the page 
    return carObj;
}