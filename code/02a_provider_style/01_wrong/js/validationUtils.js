var validationUtils = {}; // global object

// public methods added to global (public) object

validationUtils.validateDate = function () {
    var dateValue = document.getElementById("birthdayTextBox").value;
    var msg = "Please re-enter a valid date";
    var parsedDate = Date.parse(dateValue);
    if (isNaN(dateValue) && !isNaN(parsedDate)) {
        msg = ""; // dateValue contains a good date, so error message blanked out.
    }
    document.getElementById("birthdayMsg").innerHTML = msg;
};

validationUtils.validateInteger = function () {
    var integerValue = document.getElementById("collegeYearsTextBox").value;
    var msg = "Please re-enter a valid integer";
    if (isNaN(integerValue)) {
        // a problem...
    } else if (integerValue.includes(".")) {
        // also a problem. 
    } else {
        // should be OK
        msg = "";
    }
    document.getElementById("collegeYearsMsg").innerHTML = msg;
};
