// Naming convention JS file name matches the name of the SINGLE function (or object) defined in the file.

function carContent() {

    var content = `
    <style>
      .myflex {
         display:flex;
         flex-direction: row;
    </style>
`;

    // create div that will hold two cars
    var ele = document.createElement("div");
    ele.innerHTML = content;
    ele.classList.add("myflex");

    ele.appendChild(MakeCar("great", 5000, "carStyle"));
    ele.appendChild(MakeCar("fair", 2500, "carStyle"));

    // Return the div that has been created by this JS function. 
    // The calling code must then append this div to something 
    // that's already on the page or else you won't see anything. 
    return ele;

}