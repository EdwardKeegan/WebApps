
// MakeEmpList expects each object in objList to have properties: name, image, salary...
function MakeEmpList(objList) {

    // a PRIVATE function (method) 
    function formatCurrency(val) {
        var num = Number(val);
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    // ENTRY POINT 
    var container = document.createElement("div");
    container.classList.add("empList");
    for (var i = 0; i < objList.length; i++) {

        var emp = document.createElement('div');
        emp.classList.add("employee");
        container.appendChild(emp);

        var para1 = document.createElement('p');
        emp.appendChild(para1);

        var pic = document.createElement("img");
        pic.src = objList[i].image;
        para1.appendChild(pic);

        var para2 = document.createElement('p');
        para2.innerHTML = "<span style='font-weight:bold'>" + objList[i].name +
                "</span><br/> Salary: " + formatCurrency(objList[i].salary);
        emp.appendChild(para2);
    }

    return container;
}