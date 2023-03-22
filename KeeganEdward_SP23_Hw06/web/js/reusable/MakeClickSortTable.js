/* MakeClickSortTable:  JS Tutorial Code example 34 December 2022
 * Creates an HTML table from an object list.
 * 
 * The HTML table has one <tr> for each object with one column 
 * per property of the objects. The properties of the objects in
 * the object list are expected to already be <td> tags (aligned correctly 
 * according to type) that have a ".sortOrder" property. 
 * Example: this dom element <td>123</td> would have a sortOrder property 
 * of the number 123, not the character string "123" -- so that this
 * column is correctly sorted by numeric value, not alphabetically.  
 * 
 *   objList (req'd): list of objects explained above.
 *   initialSortCol (if provided): determines the initial sort of the HTML table (else sorts by 1st col).
 *   sortIcon: image placed before column headings (indicates user can click on column headings to sort)
 *  
 *   @returns div that holds an HTML table (that can be placed in the content area of a page). 
 */

// parameter object is "destructured" meaning, that you do not need code like this:  
//     var sortIcon = params.sortIcon;
// you already have headingDOM defined (if it was a property of the parameter object).


function MakeClickSortTable( { objList, initialSortCol, sortIcon } ) {

    // This function sorts the array of objects in "list" by object property "byProperty". 
    // Think of list as an I/O parameter (gets changed by the fn).

    function jsSort(objList, byProperty) {

        var obj = objList[0];
        if (!obj[byProperty]) {
            var message = "objList does not have property " + byProperty + " -- cannot sort by that property.";
            throw message;
            return;  // early return -- dont try to sort.
        }

        if (!obj[byProperty].sortOrder || obj[byProperty].sortOrder === null) {
            var message = "Cannot sort objList by property " + byProperty +
                    " because this property never had it's sortOrder set (by a method in SortableTableUtils.js).";
            throw message;
            return;  // early return -- dont try to sort.
        }

        // q and z are just elements in the array and the function you write below has to return 
        // negative or positive or zero - depending on the comparison of q and z.

        objList.sort(function (q, z) {  // in line (and anonymous) def'n of fn to compare list elements. 

            // q and z are objects to be compared. Their 'byProperty' property is the <td> by which we want to 
            // sort. Each <td> has a sortOrder property that was set (according to data type) by a method 
            // from SortableTableUtils. The sortOrder is a number or date or string (depends on type of column). 

            var qVal = q[byProperty].sortOrder;
            var zVal = z[byProperty].sortOrder;

            var c = 0;
            if (qVal > zVal) {
                c = 1;
            } else if (qVal < zVal) {
                c = -1;
            }
            //console.log("comparing " + qVal + " to " + zVal + " is " + c);
            return c;
        });

    } // jsSort

    // Create and return an HTML <tr> tag for the given obj (which comes from the object list). 
    function makeTableRow(obj) {

        var tableRow = document.createElement("tr");

        // append each table data <td> tag that is already stored in obj
        for (var prop in obj) {

            // obj[prop] should already be a "td" tag
            tableRow.appendChild(obj[prop]);
        }
        return tableRow;
    } // makeTableRow


    // Remove the tbody from 'table' (if there is one). Sort 'list' by 'sortOrderPropName'. 
    // Then add a new tbody to table, inserting rows from the sorted list.
    function addTableBody(table, list, sortOrderPropName) {

        // remove old tbody element if there is one (else you'll get the new sorted rows 
        // added to end of what's there).
        var oldBody = table.getElementsByTagName("tbody");
        if (oldBody[0]) {
            console.log("ready to remove oldBody");
            table.removeChild(oldBody[0]);
        }

        jsSort(list, sortOrderPropName);

        // Add one row (to HTML table) per element in the array.
        // Each array element has a list of properties that will become 
        // td elements (Table Data, a cell) in the HTML table. 
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        // To the tbody, add one row (to HTML table) per object of the object list.
        for (var obj of objList) {
            tableBody.appendChild(makeTableRow(obj));
        }

    } // addTableBody

    function getFirstProp(obj) {
        for (var prop in obj) {
            return prop;
        }
    }

    function makeHeader(propName, firstObjTd) {
        
        var headingCell = document.createElement("th");

        // underscores in the property name will be replaced by space in the column headings.
        headingText = propName.replace("_", " ");

        // if the <td> for this property has a null sortOrder property, then do not add sort icon, 
        // do not add onclick to sort the table by this column.  
        if (firstObjTd.sortOrder !== null) {
            headingText = `<img src='${sortIcon}'/> ${headingText}`;
            headingCell.onclick = function () {
                console.log("WILL SORT ON " + propName);
                addTableBody(newTable, objList, propName);
            };
        }
        headingCell.innerHTML = headingText;
        return headingCell;
    }

    // **********************************************************************
    // **** ENTRY POINT *****************************************************
    // **********************************************************************

    // reminder about input parameter properties: 
    //   function MakeClickSortTable( { objList, initialSortCol, sortIcon } ) {

    // Create a container to hold the title (heading) and the HTML table
    var container = document.createElement("div");
    container.classList.add("clickSort");

    if ((objList === undefined) || (objList[0] === undefined)) {
        var msg = "Error: MakeClickSortTable requires parameter property 'objList', an array with >=1 object.";
        throw msg;
        return container; // The throw above will halt execution, but just in case that gets removed... 
    }

    var sortOrderPropName = initialSortCol || getFirstProp(objList[0]);

    // Create a new HTML table tag (DOM object) and add that to the container.
    var newTable = document.createElement("table");
    container.appendChild(newTable);

    // To the HTML table, add a tr element to hold the headings of our table.
    var headerRow = document.createElement("tr");
    newTable.appendChild(headerRow);

    // ADD one column heading per property in the object list.
    var obj = objList[0];
    for (var propName in obj) {
        // propName will become the column heading. 
        // obj[propName] is a <td> created by a SortableTableUtils method. 
        // If that <td> has a sortOrder property = null, don't add sortability to this column. 
        headerRow.appendChild(makeHeader(propName, obj[propName])); 
    }
     
    // After sorting objList by sortOrderPropName, create or replace the tbody 
    // populated with data from the sorted objList.
    addTableBody(newTable, objList, sortOrderPropName);

    return container;

}  // MakeClickSortTable