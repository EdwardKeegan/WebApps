
/* global type */

// {type: "fair", price: 2500}

function Makehomes(params) {

    if (!params) {
        // alert("please check console for error message");
        throw "Error: MakehomesParamObj requires a parameter object";
    }

    var homesObj = document.createElement("div");

    var beds = params.beds || "unknown type";
    var price = params.price || "Call For Price";
    var img = params.img || "/pics/re.jpg";
    // One public data member
    homesObj.type = params.type (homesObj.type !== null) ? homesObj.title : "RES";

    // Link the styling of this object to the styles that
    // start with ".homes" which (if you followed the CSS
    // naming convention) are found in file: homes.css.
    homesObj.classList.add("homes");

    // The above two lines of code create a div like this 
    // (that you could have typed directly using HTML):
    //     <div class="homes"></div>

    homesObj.innerHTML =  homesObj.type + "<br/>" +
            "img" + img + "<br/>" +
            "Beds:" + beds +  
            "<br/> price: " + formatCurrency(price);

    // private function, can only be used within Makehomes
    function formatCurrency(num) {
        if (isNaN(num)) {
            return num;
        } else {
            var numNum = parseFloat(num);
            return numNum.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
        }
    }
    return homesObj;
}