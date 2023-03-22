// This version of MakeTable expects objList to hold an array of objects 
// in which all the properties are already "td" tags which may contain images, 
// alignment, etc. 
function MakeTableBetter(objList, numProps1stMobileCol) {

    function MakeHeaderRow(obj, numProps1stMobileCol) {
        var headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th class="identHeaderC mobCell">
            </th>
            <th class="infoHeaderC mobCell">
            </th>
        `;

        // These first two <th>s will be visible only in Mobile. They will hold 
        // the property names vertically (part in the 1st, the rest in the 2nd).
        var identHeader = headerRow.getElementsByClassName("identHeaderC")[0];
        var infoHeader = headerRow.getElementsByClassName("infoHeaderC")[0];

        var j = 0;
        // The rest of these headers will show only in desktop
        // iterate through the properties in the first object in the object list.

        for (var propName in obj) {
            
            let fldNameHdrMobile = document.createElement("p");
            fldNameHdrMobile.innerHTML = propName;

            // each property name is added to one of two mobile header cells
            if (j < numProps1stMobileCol) {
                identHeader.appendChild(fldNameHdrMobile);
            } else {
                infoHeader.appendChild(fldNameHdrMobile);
            }
            j++;

            // each property name is also added to a desktop header cell.
            var headingCell = document.createElement("th");
            headingCell.innerHTML = propName;
            headingCell.classList.add("deskCell");
            headerRow.appendChild(headingCell);
        }
        return headerRow;
    } // MakeHeaderRow


    // Create a <tr> then add all the (<td>) properties of obj to that <tr>
    function MakeDataRow(obj, numProps1stMobileCol) {

        var dataRow = document.createElement("tr");
        // For responsive design, add the first columns that will show values 
        // (vertically) only in mobile.
        dataRow.innerHTML = `
          <td class="mobCell identColC">
          </td>
          <td class="mobCell infoColC">
          </td>
        `;
        var identCol = dataRow.getElementsByClassName("identColC")[0];
        var infoCol = dataRow.getElementsByClassName("infoColC")[0];
        // The rest of the <td>s will show horizontally, only in desktop.

        var i = 0;
        for (var prop in obj) {

            // The innerHTML of each <td> (property of obj) gets added to one of 
            // the first two mobile columns (added vertically with new lines between)
            if (i < 1) {
                identCol.innerHTML += obj[prop].innerHTML;
            } else if (i < numProps1stMobileCol) {
                identCol.innerHTML += "<br/>"+obj[prop].innerHTML;
            } else if (i === numProps1stMobileCol) {
                infoCol.innerHTML += obj[prop].innerHTML;
            } else {
                infoCol.innerHTML += "<br/>"+obj[prop].innerHTML;
            }
            i++;
            // These same <td>s (of obj) will be added to desktop columns 
            // and will show horizontally. 
            dataRow.appendChild(obj[prop]);
            // style this cell to show only in desktop.
            obj[prop].classList.add("deskCell");
        }
        return dataRow;
    } // MakeDataRow


    // ***************** Entry Point ************************
    console.log("objList on next line");
    console.log(objList);

    // Create a container to hold the HTML table
    var container = document.createElement("div");
    container.classList.add("clickSort");

    var newTable = document.createElement("table");
    container.appendChild(newTable);

    // use the first object's property names as column headings.
    newTable.appendChild(MakeHeaderRow(objList[0], numProps1stMobileCol));

    var tableBody = document.createElement("tbody");
    newTable.appendChild(tableBody);

    // To the HTML table's <tbody>, add one <tr> (table row) per object 
    // from objList. 
    for (var obj of objList) {
        tableBody.appendChild(MakeDataRow(obj, numProps1stMobileCol));
    }

    return container;
}  // MakeTableBetter