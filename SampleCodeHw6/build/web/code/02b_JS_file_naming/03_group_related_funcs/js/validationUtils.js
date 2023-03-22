var validationUtils = {}; // global object

// next we add three public functions to the global object

validationUtils.validateDate = function () {
    console.log('validateDate just ran');
};

validationUtils.validateDecimal = function() {
    console.log('validateDecimal just ran');
};

validationUtils.validateInteger = function () {
    console.log('validateInteger just ran');
};