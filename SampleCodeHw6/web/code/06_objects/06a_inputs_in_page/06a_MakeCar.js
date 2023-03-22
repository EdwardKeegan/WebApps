function MakeCar (theName, theCondition, thePrice) {

    var carObj = document.createElement("div"); 
    
    // private data members
    var name = theName;
    var condition = theCondition;       
    var price = thePrice;                  

    // private function (method)
    var display = function ( ) {          
        carObj.innerHTML = name + 
                "<br/>Condition: " + condition + 
                "<br/>Price: " + formatCurrency(price);
    };

    carObj.setCondition = function (newCondition) {
        condition = newCondition;
        display(); // show updated property on the page
    };

    carObj.changePrice = function (changeRate) {
        price = price * (1 + changeRate);
        display(); // show updated price on the page
    };

    carObj.log = function () {
        console.log("Condition of " + name + " is " + condition +
                " and price is $" + price);
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    display(); // show initial properties on the page 
    return carObj;
}