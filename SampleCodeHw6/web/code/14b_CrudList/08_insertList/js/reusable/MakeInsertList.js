"use strict"; 

function MakeInsertList(objList, inputSpecs, displayTemplate) {

    // Declarations that need to be at the MakeUserList level.

    var editArea; // declare at the MakeUserList level it can be accessed by insert as well
    // as update. This will be the div that gets appended to the editContainer above. 

    // we want only one child div at a time to be edited. 
    // so, control this (at the list/container level, not at the 
    // object/child div level) -- with a boolean.
    var isEditing = false;
    

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
    function MakeChildEle(obj, inputSpecs, displayTemplate) {

        // defensive (prodvider style) coding. Make sure that obj has all the fields 
        // it needs (as specified in inputSpecs).
        for (var spec of inputSpecs) { // spec represents inputSpecd[i]
            //console.log("fieldName "+spec.fieldName);
            if (!obj.hasOwnProperty(spec.fieldName)) {
                var errorMsg = "function MakeUserEle needs an 'obj' that has all the \n" +
                        "properties as specified in 'inputSpecs.fieldname'. 'obj' \n" +
                        "does not have property " + spec.fieldName;
                alert(errorMsg);
                throw new Error(errorMsg);
                // this should stop execution on the page... 
            }
        }

        var eleDiv = MakeTag({
            htmlTag: "div",
            cssClass: "ele"
        });

        function refreshChildEle() {
            eleDiv.innerHTML = applyTemplate(displayTemplate,obj);
        }
        refreshChildEle();

        return eleDiv;
    } // MakeChildEle


    // This function is declared at the MakeUserList level so it can be called by 
    // by insert success, and cancel... 
    function deleteEditArea() {
        var parent = editArea.parentNode;
        parent.removeChild(editArea);
    }

    // This function is declared at the MakeUserList level since it will be called by insert cancel 
    // as well as edit cancel. 
    function cancel() {
        isEditing = false;
        deleteEditArea();
    }

    // ENTRY POINT for MakeInsertList
    var listDiv = MakeTag({// req'd: htmlTag, opt'l: cssClass, innerHTML, src, parent
        htmlTag: "div",
        cssClass: "insertEditList"
    });

    // create a div that will hold the edit area
    var editContainer = MakeTag({
        htmlTag: "div",
        parent: listDiv
    });

    var insertButton = MakeTag({
        htmlTag: "button",
        innerHTML: "Insert",
        parent: listDiv
    });

    insertButton.onclick = function () {

        if (!isEditing) {
            editArea = MakeEditArea({
                inputSpecs: inputSpecs,
                successCallBack: insertSuccess,
                cancelCallBack: cancel
            });
            editContainer.appendChild(editArea);
            isEditing = true;
        }
    };

    function insertSuccess(newObj) {
        // newObj contains all the validated input entered by the user.

        // free up editing area for next edit/insert
        isEditing = false;

        // make the edit area disapper
        deleteEditArea();

        // make a new user child div and add it to the user list div.
        var newDiv = MakeChildEle(newObj, inputSpecs, displayTemplate);
        listDiv.appendChild(newDiv);
        
        objList.push(newObj); // actuall add the new object to the end of the objList. 
        // This will affect the objList of the consumer (who called MakeInsertList). 
        
    } // insertSuccess

    // create one (editable) child div per user object in objList
    for (var myObj of objList) {
        listDiv.appendChild(MakeChildEle(myObj, inputSpecs, displayTemplate));
    }

    return listDiv;

} // MakeInsertEditList