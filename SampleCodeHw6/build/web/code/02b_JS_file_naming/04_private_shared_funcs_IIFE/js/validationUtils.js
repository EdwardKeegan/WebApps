var validationUtils = {}; // global object

// next we run an IIFE (pronounced If-ee, for Immediately Invoked Function Expression)
/* This is an anonymous (unnamed) function that runs once right away without being called. 
 * In here, we can add the public functions (as done in the previous example, but we 
 * can now also have private methods that can be shared by our three public ones. */


(function () {
    validationUtils.validateDate = function () {
        console.log('validateDate starting');
        helper();
        console.log('validateDate done');
    };

    validationUtils.validateDecimal = function () {
        console.log('validateDecimal starting');
        helper();
        console.log('validateDecimal done');
    };

    validationUtils.validateInteger = function () {
        console.log('validateInteger just ran');
    };

    function helper() {
        console.log(" (private) Helper function called");
    }

})();

