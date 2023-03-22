function MakeHomes(beds,baths, rentorsale, thePrice) {
//(bedsbath, thePrice) are private rentorsale is public
    var homesObj = document.createElement("div");
    homesObj.classList.add("homes"); //adds styling to homesObj

    // type is a public property (placed added after .homesObj)
    homesObj.type = rentorsale;          // first use of “condition” creates custom property

    // price is a private property (just declared within Makehomes).
    var price = thePrice; // create custom property “price”
    var beds = beds;
    var baths = baths;

    homesObj.display = function ( ) {           // create custom method “display”

        // make the current properties visible on the page
        homesObj.innerHTML = "Home Type: " + homesObj.type + "<br/> Beds:" + formatNumber(beds);  + "<br/> Baths:" + formatNumber(baths); + "<br/> price: " +
                formatCurrency(price); 
    };

    homesObj.setType = function (newType) {
        homesObj.type = newType;
        homesObj.display(); // show updated property on the page
    };

    homesObj.changePrice = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing price by this rate " + n);
        price = price * (1 + n);
        homesObj.display(); // show updated price on the page
    };

    homesObj.log = function () {
        console.log("Types of homes with id " + homesObj.id + " is " + homesObj.type + " and price is $" + homesObj.price);
    };

    // private function, can only be used within Makehomes
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }



    homesObj.display(); // show initial properties on the page 
    return homesObj;
}