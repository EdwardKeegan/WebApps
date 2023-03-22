var Tags = {};
Tags.MakeP = function (what) {
    var p = document.createElement("p");
    p.innerHTML = what; 
    return p;
};
Tags.MakeDiv = function (what) {
    var div = document.createElement("div");
    div.innerHTML = what; 
    return div;
};