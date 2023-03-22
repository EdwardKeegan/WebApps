/*
 * Modify the code below so that it returns a div that has one paragraph per property in obj. 
 * (You must iterate over the properties, not knowing what they might be...)
 * Each paragraph shall have this text: 
 *      "The property named XXX has the value YYY".
 * Replace XXX with the property name. Replace YYY with the value of that propery.
 */


function extractPropsAndValues(obj) {

    var div = document.createElement("div");
    div.classList.add("extractProps");


// you will replace this code 
 // Create a new HTML table element (DOM object).
    var table = document.createElement("table");
    div.appendChild(table);
    
    // **** Make Heading Row ****
    // To the HTML table, add a tr (table row) element to hold the headings of our table.
    var headerRow = document.createElement("tr");
    table.appendChild(headerRow);

    // Add (to the table heading row) one th (table heading cell) per property 
    // of the object, using property names as innerHTML.
    for (var propName in obj) {
        var headingCell = document.createElement("th");
        headingCell.innerHTML = propName;
        headerRow.appendChild(headingCell);
    }


    // **** Make A Single Data Row ****
    // To the HTML table, add a tr (table row) element to hold the values in the object. 
    var dataRow = document.createElement("tr");
    table.appendChild(dataRow);

    // Add (to the table data row) one td (table data cell) per property 
    // of the object, using property values as innerHTML.
    for (var propName in obj) {
        var dataCell = document.createElement("td");
        dataCell.innerHTML = obj[propName]; // uses associative array notation.
        dataRow.appendChild(dataCell);
    }
// With code something like this: 

    // for every property in object 
    //   create a paragraph
    //   set the innerHTML of the paragraph to the desired text 
    //       "The property named XXX has the value YYY"
    //   append the paragraph to the above div

    return div;
}