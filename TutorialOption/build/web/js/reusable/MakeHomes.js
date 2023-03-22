function MakeHomes({beds = 0, baths = 0, rentorsale = "Rent", thePrice = 0, image = "image not supplied"} = {}) {
  var homesObj = document.createElement("div");
  homesObj.classList.add("homes");

  // type is a public property
  homesObj.type = rentorsale;

  // price is a private property
  var price = thePrice;

  // add an image to the homesObj
  var img = document.createElement("img");
  img.src = image;
  homesObj.appendChild(img);

  // beds and baths are public properties
  homesObj.beds = beds;
  homesObj.baths = baths;

  // Add the UI elements for changing the type of the property.
  var typeButton = document.createElement("button");
  typeButton.innerText = "Change Type to:";
  homesObj.appendChild(typeButton);

  var typeInput = document.createElement("input");
  homesObj.appendChild(typeInput);
  homesObj.appendChild(document.createElement("br"));

  // Add the UI elements for changing the price of the property.
  var priceButton = document.createElement("button");
  priceButton.innerText = "Change Price to:";
  homesObj.appendChild(priceButton);

  var priceInput = document.createElement("input");
  homesObj.appendChild(priceInput);
  homesObj.appendChild(document.createElement("br"));

  // Public method to change the type of the property.
  homesObj.changeType = function (newType) {
    homesObj.type = newType;
    display();
  };

  // Public method to change the price of the property.
  homesObj.changePrice = function (newPrice) {
    price = newPrice;
    display();
  };

  // Display the current information about the property.
  var display = function () {
    var info = homesObj.querySelector("p");
    if (!info) {
      info = document.createElement("p");
      homesObj.appendChild(info);
    }
    info.innerText = `Type: ${homesObj.type}  Beds: ${homesObj.beds}  Baths: ${homesObj.baths}  Price: ${formatCurrency(price)}`;
  };
  display();

  // Event handlers for the type button and input box.
  typeButton.onclick = function () {
    homesObj.changeType(typeInput.value);
  };

  // Event handlers for the price button and input box.
  priceButton.onclick = function () {
    homesObj.changePrice(priceInput.value);
  };

  // Private function to format the currency.
  function formatCurrency(num) {
    return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
  }

  return homesObj;
}
