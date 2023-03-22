var validationUtils = {}; // global object

// public methods added to global (public) object

validationUtils.validateDate = function (inputId, msgId) {
    var dateValue = document.getElementById(inputId).value;
    var msg = "Please re-enter a valid date";
    var parsedDate = Date.parse(dateValue);
    if (isNaN(dateValue) && !isNaN(parsedDate)) {
        msg = ""; // dateValue contains a good date, so error message blanked out.
    }
    document.getElementById(msgId).innerHTML = msg;
};

validationUtils.validateInteger = function (inputId, msgId) {
    var integerValue = document.getElementById(inputId).value;
    var msg = "Please re-enter a valid integer";
    if (isNaN(integerValue)) {
        // a problem...
    } else if (integerValue.includes(".")) {
        // also a problem. 
    } else {
        // should be OK
        msg = "";
    }
    document.getElementById(msgId).innerHTML = msg;
};