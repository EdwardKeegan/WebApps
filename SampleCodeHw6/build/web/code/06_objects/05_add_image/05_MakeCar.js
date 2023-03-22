function MakeCar (theName, theCondition, thePrice, theImg) {

    var carObj = document.createElement("div");

    var carInfo = document.createElement("div");
    carObj.appendChild(carInfo);

    var carImg = document.createElement("img");
    carImg.src = theImg;
    carObj.appendChild(carImg);

    carObj.name = theName;
    carObj.condition = theCondition;          // first use of “condition” creates custom property
    carObj.price = thePrice;                  // create custom property “price”

    carObj.display = function ( ) {           // create custom method “display”

        // make the current properties visible on the page - including the image
        carInfo.innerHTML = "<h3>"+carObj.name +"</h3>" +
                "<br/>Condition: " + carObj.condition +
                "<br/>Price: " + formatCurrency(carObj.price);
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
        console.log("Condition of car with id " + carObj.id + " is " + carObj.condition + " and price is $" + carObj.price);
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    carObj.display(); // show initial properties on the page 
    return carObj;
}