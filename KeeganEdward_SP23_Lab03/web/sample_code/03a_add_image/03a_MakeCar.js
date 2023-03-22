function MakeCar(name, condition, price, imgURL) {

    var carObj = document.createElement("div");

    carObj.classList.add("car"); // style object with the ".car" rules from file car.css

    // Create h3 DOM element to hold the name and append to carObj
    var carHeader = document.createElement("h3");
    carHeader.innerHTML = name;
    carObj.appendChild(carHeader);

    // Create p DOM element to hold condition and price and append to carObj
    var carInfo = document.createElement("p");
    carInfo.innerHTML =
            "  Condition: " + condition +
            "  <br/>" +
            "  Price: " + formatCurrency(price);
    carObj.appendChild(carInfo);

    // create img DOM element, set it's src attribute, and append to carObj
    var carImg = document.createElement("img");
    carImg.src = imgURL;
    carObj.appendChild(carImg);

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    return carObj;
}