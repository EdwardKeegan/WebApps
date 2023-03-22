var TableUtils = {};

TableUtils.makeText = function (text) {
    var tableData = document.createElement('td');
    tableData.classList.add("textType");
    if (!text) {
        text = "";
    }
    tableData.innerHTML = text;
    return tableData;
};

// num can be a numeric value in a string or a numeric value
// If what's in the string is not numeric, you'll see "Not Numeric" before the value.
TableUtils.makeNumber = function (num, isFormatCurrency) {

    var tableData = document.createElement('td');
    tableData.classList.add("numberType");
    if (!num) {
        num = "";
    } else {
        var tmp = num + ""; // tmp is num converted to string

        // Remove any previous formatting that may be there... 
        tmp = tmp.replace(" ", "");
        tmp = tmp.replace(",", "");
        tmp = tmp.replace("$", "");

        // see if the value now in the string (with formatting removed) is numeric.
        if (isNaN(tmp)) {
            num = "Not Numeric " + num; // preserve original value in error msg.
        } else {
            if (isFormatCurrency) {
                var numericValue = Number(tmp);
                num = numericValue.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
            }
        }
    }
    tableData.innerHTML = num;
    return tableData;
};

TableUtils.makeDate = function (dateString) {
    var tableData = document.createElement('td');
    tableData.classList.add("dateType");
    if (!dateString) {
        dateString = "";
    }
    tableData.innerHTML = dateString;
    return tableData;
};

TableUtils.makeImage = function (imageFileName, imgStyle) {

    var tableData = document.createElement('td');
    tableData.classList.add("imageType");
    var img = document.createElement("img");
    if (imageFileName && imageFileName !== "") {
        img.src = imageFileName;
    }
    img.style = imgStyle;

    tableData.appendChild(img);
    return tableData;
};