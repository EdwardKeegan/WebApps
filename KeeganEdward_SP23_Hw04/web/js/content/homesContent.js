"use strict";
function homesContent() {
    var homescontent = `
        
        <h3>This Function Generates Content Using More JS</h3>
        <p>
            These are the objects for homework 3 
        </p>
    `;
    var homesele = document.createElement("div");
    homesele.innerHTML = homescontent; // the HTML code specified just above...
    var objContainer = document.createElement("div");
    objContainer.classList.add('flexContainer'); // see styling in this file, above...
    homesele.appendChild(objContainer);
    objContainer.appendChild(MakeHomes({beds: 2, baths: 1, rentorsale: "Rent", thePrice: 695, image: "pics/re.jpg"}));
    objContainer.appendChild(MakeHomes({beds: 3, baths: 2, rentorsale: "Sale", thePrice: 240000, image: "pics/newyork.jpg"}));
    objContainer.appendChild(MakeHomes()); // third call with no input parameters

    return homesele;
}