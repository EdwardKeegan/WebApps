function MakeEmp(name, title, salary,imgURL) {
// modify to params, add img DOM element
    var empObj = document.createElement("div");

    // link the styling of empObj to all the styles that start with ".emp"
    // which (if following our CSS naming convention) are all in file: "emp.css"
    empObj.classList.add("emp");

    // first use of “.name” creates custom (public) property in empObj.
    empObj.name = name;
    empObj.title = title;

    // title is private (a variable declared normally in the Makeemp function)
    
   var salary = salary;

    // create an Info div where name and title can be displayed
    // (separate from the rest of the UI, e.g., input boxes and buttons)
    var empInfo = document.createElement("div");
    empObj.appendChild(empInfo);

    // private method display, populates the Info div with current values for 
    // name and title. 
    var display = function ( ) {
        empInfo.innerHTML = "Employee Name: " + empObj.name + 
                "<br/> Empolyee Title: " + empObj.title + 
                "<br/> Salary: " + formatCurrency(salary);
    };

    // name setter method (public)
    empObj.setname = function (newname) {
        empObj.name = newname;
        display(); // show updated property on the page
    };
     empObj.settitle = function (newtitle) {
        empObj.title = newtitle;
        display(); // show updated property on the page
    };

    // public method to modify salary 
    empObj.changesalary = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing salary by this rate " + n);
        salary = salary * (1 + n);
        display(); // show updated salary on the page
    };

    // Create User Interface for setting name
    var nameButton = document.createElement("button");
    nameButton.innerHTML = "Change name to: ";
    empObj.appendChild(nameButton);

    var newnameInput = document.createElement("input");
    empObj.appendChild(newnameInput);

    nameButton.onclick = function () {
        empObj.setname(newnameInput.value);
    };

    empObj.appendChild(document.createElement("br")); // new line

    // create User interface for changing title
    var titleButton = document.createElement("button");
    titleButton.innerHTML = "Change Title ";
    empObj.appendChild(titleButton);
    
      var newtitleInput = document.createElement("input");
    empObj.appendChild(newtitleInput);

    titleButton.onclick = function () {
        empObj.settitle(newtitleInput.value);
    };
    
    var salaryButton = document.createElement("button");
    salaryButton.innerHTML = "Change salary by factor of ";
    empObj.appendChild(salaryButton);
    
    

    var salaryFactor = document.createElement("input");
    empObj.appendChild(salaryFactor);

    salaryButton.onclick = function () {
        empObj.changesalary(salaryFactor.value);
    };
    var empImg = document.createElement("img");
    empImg.src = imgURL;
    empObj.appendChild(empImg);

    // private function, can only be used within MakeEmp
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    display(); // show initial properties on the page 
    return empObj;
}