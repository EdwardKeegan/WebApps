var pTag = {};
pTag.Make = function (what) {
    var p = document.createElement("p");
    p.innerHTML = what; 
    return p;
};
var divTag = {};
divTag.Make = function (what) {
    var div = document.createElement("div");
    document.getElementById("view").innerHTML += what; 
    return div;
};