"use strict";
/* 
 * MakeEditArea expects a parameter object with the following inputs: 
 *     inputSpecs: array of objects (one object per field the user is supposed to type in)
 *     successCallBack:  consumer function to be called if the user clicks submit and all 
 *         inputs pass validation (Provider code will pass an object full of user inputs -- 
 *         to the consumer successCallBack function). 
 *     cancelCallBack: consumer function to be called if the user clicks cancel. 
 * 
 * MakeEditArea returns a div that contains a prompt, an input box, and a 
 * possible error message for each field it is supposed to get from the user. 
 * It also has a submit button, a cancel button, and a record level message. 
 * 
 * Here are the properties expected in inputSpec objects (example object):
 *    "prompt": "User Email: ",      --> prompt for the input tag
 *    "fieldName": "userEmail",      --> fieldName to use when storing user's input 
 *    "dataType": "string",          --> type of data - you add your own types like date, or integer
 *    "minLen": 1,                   --> minLen 0 means optional
 *    "maxLen": 50                   --> maxLen, max # characters to be checked, if provided 
 * 
 */

function MakeEditArea(params) {

    // defensive (provider style) programming. First check if params has everything we need...
    if (!params.inputSpecs || !params.inputSpecs[0]) {
        var errorMsg = "MakeEditArea did not receive a parameter property named 'inputSpecs'\n" +
                "that has at least one object (defining an input field).";
        alert(errorMsg); // this would generally be a programmer error, not user error
        throw errorMsg;
        return;
    }
    var inputSpecs = params.inputSpecs;

    if (!params.successCallBack || !(params.successCallBack instanceof Function)) {
        var errorMsg = "MakeEditArea did not receive a parameter property named 'successCallBack',\n" +
                "a Consumer function that will be called (passing an object full of user entered data)\n" +
                "if the user clicks 'Submit' and everything validates.";
        alert(errorMsg); // this would generally be a programmer error, not user error
        throw errorMsg;
        return;
    }
    var successCallBack = params.successCallBack;


    if (!params.cancelCallBack || !(params.cancelCallBack instanceof Function)) {
        var errorMsg = "MakeEditArea did not receive a parameter property named 'cancelCallBack',\n" +
                "a Consumer function that will be called if the user clicks 'Cancel'.\n" +
                "(no input will be passed to the cancel call back function).";
        alert(errorMsg); // this would generally be a programmer error, not user error
        throw errorMsg;
        return;
    }
    var cancelCallBack = params.cancelCallBack;


    // ENTRY POINT
    var editDiv = MakeTag({
        htmlTag: "div",
        cssClass: "editArea"
    });
    // MakeTag required property: params.htmlTag
    // opt'l properties: innerHTML, cssClass, src, parent

    for (var spec of inputSpecs) {

        // Above line of code (for...of) is shorthand for this: 
        // for (var i=0; i<inputSpecs.length; i++) {
        //   var spec=inputSpecs[i];

        /* 
         * Example properties of spec: 
         * 
         *    "prompt": "User Email: ",      --> prompt for the input tag
         *    "fieldName": "userEmail",      --> fieldName for the input tag
         *    "dataType": "string",          --> dataType (string, date, decimal, or integer)
         *    "minLen": 1,                   --> minLen 0 means optional
         *    "maxLen": 50                   --> maxLen will be checked if provided
         * 
         */

        // Add prompt for field...
        MakeTag({// dont need a reference to this span tag.
            htmlTag: "span",
            innerHTML: spec.prompt,
            parent: editDiv
        });
        // Add input tag for field. Since we need to access this later, keep the 
        // inputTag reference. Save the input tag right into the inputSpecs object 
        // to which it belongs.
        spec.inputTag = MakeTag({
            htmlTag: "input",
            parent: editDiv
        });

        // Add span tag to hold error Msg for this field. Since we need to access this 
        // later, save the span tag reference. Save the error span tag right into the 
        // inputSpecs object to which it belongs.
        spec.errorMsg = MakeTag({
            htmlTag: "span",
            innerHTML: "&nbsp;", // a blank, keeps it's space vertically
            parent: editDiv
        });

        // Add a new line between inputs
        MakeTag({// dont need a reference to this tag (so not saving MakeTag's return value).
            htmlTag: "br",
            parent: editDiv
        });

    } //  for (var spec of inputSpecs)

    // Add a new line before the submit and cancel buttons
    MakeTag({// dont need a reference to this tag (so not saving MakeTag's return value).
        htmlTag: "br",
        parent: editDiv
    });

    var submitButton = MakeTag({
        htmlTag: "button",
        innerHTML: "Submit",
        parent: editDiv
    });

    submitButton.onclick = function () {
        // check if the value of each input tag matches the type of data it is supposed to be. 
        // If not ok, put an error message next to the bad input and set the record level message 
        // to be like "Please try again" and return early (there's no need to alert the consumer 
        // with any callback because the user did not successfully "submit" data that passed validation. 
        // The code below does not validate everything, it just checks to see if each input has the minimum 
        // number of characters required. 
        var allGood = true;
        for (var spec of inputSpecs) {
            if (spec.inputTag.value.length < spec.minLen) {
                spec.errorMsg.innerHTML = "Error: input must have at least " + spec.minLen + " character(s).";
                allGood = false;
            } else {
                spec.errorMsg.innerHTML = "&nbsp;"; // wipe any previous error message that might be there.
            }
        }
        if (!allGood) {
            editDiv.recordLevelMsg.innerHTML = "Please Try Again";
            return;
        }

        // Build object full of user data to pass to the success call back function
        editDiv.recordLevelMsg.innerHTML = "Data Accepted !";
        var inputVals = [];
        for (var spec of inputSpecs) {
            inputVals[spec.fieldName] = spec.inputTag.value;
        }
        successCallBack(inputVals);
    };

    var cancelButton = MakeTag({
        htmlTag: "button",
        innerHTML: "Cancel",
        parent: editDiv
    });

    function clearAll() {
        // Blank out all input tags and also the record level message.
        for (var spec of inputSpecs) {
            spec.inputTag.value = "";
        }
        editDiv.recordLevelMsg.innerHTML = "";
    }

    cancelButton.onclick = function () {
        // Since the user is cancelling, clear out all inputs and record level msg. 
        clearAll();
        
        // inform the consumer that the user cancelled (let them do what they want about that). 
        cancelCallBack();
    };

    editDiv.recordLevelMsg = MakeTag({
        htmlTag: "span",
        cssClass: "recLevelMsg",
        parent: editDiv
    });

    return editDiv;
}