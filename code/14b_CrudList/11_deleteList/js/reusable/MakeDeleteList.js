"use strict";
function MakeDeleteList( {objList, displayTemplate} ) {

    /* Apply a template to an object. Example:
     *    template: "My id is ${obj.userId} and my email is ${obj.userEmail}",
     *    obj:      {userId: 123, userEmail: "sallyk@temple.edu"}
     * returns this: "My id is 123 and my email is sallyk@temple.edu"                 */
    function applyTemplate(template, obj) {
        // Surround 'template' with back ticks and then 'eval' that. eval is a 
        // JS function that runs a string as if it were code. Then return the 
        // result of applying the template to object 'obj'.

        var result = eval("`" + template + "`");
        //console.log("result is "+result);
        return result;
    }

    // creates a user child div (to be added into the user list div) based on the 
    // user obj that's been passed in. The obj passed in is expected to have the 
    // fields specified in userInputSpects (userEmail, image, birthday, membershipFee). 
    // When the user clicks on the user child div, the user object values are shown 
    // (editable in input tags) in an editArea div.
    function MakeChildEle(obj, displayTemplate) {

        var eleDiv = MakeTag({
            htmlTag: "div",
            cssClass: "ele"
        });

        // we want a grandchild div that holds the info, without containing the the delete button. 
        var eleInfo = MakeTag({
            htmlTag: "div",
            cssClass: "eleInfo",
            innerHTML: applyTemplate(displayTemplate, obj),
            parent: eleDiv
        });

        var deleteIcon = MakeTag({
            htmlTag: "div",
            cssClass: "x",
            innerHTML: "&times;", // this is a multiplication X that looks better than plain x
            parent: eleDiv
        });

        deleteIcon.onclick = function () {
            var indx = objList.indexOf(obj);
            //alert("You are trying to delete object with index value " + indx);

            // delete 1 element from objList starting with index indx.
            objList.splice(indx, 1);

            // remove the div that represents the object that was just deleted from objList.
            var eleToDelete = deleteIcon.parentElement;
            eleToDelete.remove();
        };

        return eleDiv;
    } // MakeChildEle



    // ENTRY POINT for MakeDeleteList
    var listDiv = MakeTag({// req'd: htmlTag, opt'l: cssClass, innerHTML, src, parent
        htmlTag: "div",
        cssClass: "deleteList"
    });


    // create one (editable) child div per user object in objList
    for (var myObj of objList) {
        listDiv.appendChild(MakeChildEle(myObj, displayTemplate));
    }

    return listDiv;

} // MakeDeleteList