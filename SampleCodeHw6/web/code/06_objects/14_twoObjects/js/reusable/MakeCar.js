function MakeCar(theCondition, thePrice, style) {

    var carObj = document.createElement("div");
    carObj.classList.add(style);

    // condition is public (added after carObj.
    carObj.condition = theCondition;       // first use of “condition” creates custom property

    // price is private (just declared in the MakeCar function)
    var price = thePrice;

    var carInfo = document.createElement("div");
    carObj.appendChild(carInfo);

    carObj.display = function ( ) {           // create custom method “display”

        // make the current properties visible on the page
        carInfo.innerHTML = "Car condition: " + carObj.condition + "<br/> price: " +
                formatCurrency(price);
    };

    // Condition setter method
    carObj.setCondition = function (newCondition) {
        carObj.condition = newCondition;
        carObj.display(); // show updated property on the page
    };

    // Create User Interface for setting condition
    var conditionButton = document.createElement("button");
    conditionButton.innerHTML = "Change Condition to: ";
    carObj.appendChild(conditionButton);

    var newConditionInput = document.createElement("input");
    carObj.appendChild(newConditionInput);

    conditionButton.onclick = function () {
        carObj.setCondition(newConditionInput.value);
    };
    
    carObj.appendChild(document.createElement("br")); // new line

    // price modifier method
    carObj.changePrice = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing price by this rate " + n);
        price = price * (1 + n);
        carObj.display(); // show updated price on the page
    };

    // create User interface for changing price
    var priceButton = document.createElement("button");
    priceButton.innerHTML = "Change price by factor: ";
    carObj.appendChild(priceButton);

    var priceFactor = document.createElement("input");
    carObj.appendChild(priceFactor);

    priceButton.onclick = function () {
        carObj.changePrice(priceFactor.value);
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