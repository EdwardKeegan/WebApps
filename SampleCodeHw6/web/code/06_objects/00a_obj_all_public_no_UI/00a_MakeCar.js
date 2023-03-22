// In this example, there are no DOM elements...

function MakeCar (theName, theCondition, thePrice) {
    
    var carObj = {}; 
    carObj.name = theName;                         // first use of “name” creates public property
    carObj.condition = theCondition;               // create public property “condition” 
    carObj.price = thePrice;                       // create public property “price”

    carObj.setCondition = function (newCondition) { // public method “setCondition”
        carObj.condition = newCondition;
    };

    carObj.changePrice = function (changeRate) {    // public method “changePrice”
        carObj.price = carObj.price * (1 + changeRate); 
    };
    
    carObj.log = function () {                       // public method “log”
        console.log("Condition of "+carObj.name+" is " + carObj.condition + 
                " and price is $" + carObj.price);
    };
 
    return carObj;
}