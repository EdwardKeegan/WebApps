
function MakeCar (theName, theCondition, thePrice) {

    var carObj = {};
    carObj.name = theName;                         // name is still a public property  
    var condition = theCondition;                  // “condition” is private
    var price = thePrice;                          // “price” is private

    carObj.setCondition = function (newCondition) { // “setCondition” still a public method
        condition = newCondition;
    };

    carObj.changePrice = function (changeRate) {    // create custom public method “changePrice”
        price = price * (1 + changeRate);
    };

    carObj.log = function () { // create custom public method “log”
        console.log("Condition of " + carObj.name + " is " + condition +
                " and price is " + formatCurrency(price));
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }
    var formatCurrency2 = function(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    };
    return carObj;
}