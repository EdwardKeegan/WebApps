"use strict";

function MakeList(objList, displayTemplate) {

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
    // user obj that's been passed in (and the template that shows how that object 
    // is to be displayed). 
    function MakeChildEle(obj, displayTemplate) {

        var eleDiv = MakeTag({
            htmlTag: "div",
            innerHTML: applyTemplate(displayTemplate, obj),
            cssClass: "ele"
        });

        return eleDiv;
    } // MakeChildEle



    // ENTRY POINT for MakeList
    var listDiv = MakeTag({// req'd: htmlTag, opt'l: cssClass, innerHTML, src, parent
        htmlTag: "div",
        cssClass: "list"
    });

    // create one (editable) child div per user object in objList
    for (var myObj of objList) {
        listDiv.appendChild(MakeChildEle(myObj, displayTemplate));
    }

    return listDiv;

} // MakeList