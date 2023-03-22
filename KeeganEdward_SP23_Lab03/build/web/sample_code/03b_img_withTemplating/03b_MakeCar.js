function MakeCar(name, condition, price, imgURL) {

    var carObj = document.createElement("div");
    carObj.classList.add("car"); // style object with the ".car" rules from file car.css
    
    carObj.innerHTML = `<h3>${name}</h3>
        <p>Condition: ${condition}<br/>
           Price: ${formatCurrency(price)}
        </p>
        <img src='${imgURL}'/>
    `;
    
    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    return carObj;
}