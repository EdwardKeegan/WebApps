function MakeCar (theName, theCondition, thePrice) {
    
    var carObj = document.createElement("div"); 
    
    carObj.name = theName;                    // first use of “name” creates custom public property
    carObj.condition = theCondition;          // first use of “condition” creates custom public property
    carObj.price = thePrice;                  // create custom public property “price”

    carObj.display = function ( ) {           // create custom method “display”
        // make the current properties visible on the page
        carObj.innerHTML = "Car "+carObj.name+
                "<br/> Condition: " + carObj.condition + 
                "<br/> Price: " +
                formatCurrency(carObj.price);
    };

    carObj.setCondition = function (newCondition) {
        carObj.condition = newCondition;
        carObj.display(); // show updated property on the page
    };

    carObj.changePrice = function (changeRate) {
        carObj.price = carObj.price * (1 + changeRate);
        carObj.display(); // show updated price on the page
    };

    carObj.log = function () {
        console.log("Condition of "+carObj.name+
                " is " + carObj.condition + 
                " and price is $" + carObj.price);
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    carObj.display(); // show initial properties on the page 
    return carObj;
}