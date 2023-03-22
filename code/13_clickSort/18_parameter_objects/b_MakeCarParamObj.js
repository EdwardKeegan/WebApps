// call to this was: 

//      var yourCarObj = MakeCarParamObj( {condition: "fair", price: 2500} );

// After line 20 (below), condition will be fair and price will be 2500


// Because of lines 14-15 below, you can also call it with an empty object like this:

//      var otherCarObj = MakeCarParamObj( {} );

// After line 20 (below) you'll get the default values:
// condition is "unknown condition" and price is "Call For Price" 

function MakeCarParamObj (params) {

    var carObj = document.createElement("div");

    var condition = params.condition || "unknown condition";
    var price = params.price || "Call For Price";

    // Link the styling of this object to the styles that
    // start with ".car" which (if you followed the CSS
    // naming convention) are found in file: car.css.
    carObj.classList.add("car");

    // The above two lines of code create a div like this 
    // (that you could have typed directly using HTML):
    //     <div class="car"></div>

    carObj.innerHTML = "Car condition: " + condition + "<br/> price: " +
            formatCurrency(price);

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        if (isNaN(num)) {
            return num;
        } else {
            var numNum = parseFloat(num);
            return numNum.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
        }
    }
    return carObj;
}