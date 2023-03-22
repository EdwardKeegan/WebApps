function MakeEmp (theEmpName="Employee", theEmpTitle="Unknown", theEmpSalary="$$$", imgURL){
   
    var empObj = document.createElement("div");
    
    empObj.classList.add("emp"); // style object with the ".emp" rules from file emp.css

    // first use of “.condition” creates custom (public) property of empObj
    empObj.name = theEmpName;

    // price is private property of empObj (because normal variable declaration in MakeEmp
    var title = theEmpTitle;
    
    //salary is a private property of empObj
    var salary = theEmpSalary;


    // Condition setter method (public) - could be used from outside MakeEmp
    empObj.setName = function (newName) {
        empObj.name = newName;
        display(); // show updated property on the page
    };
    // Condition setter method (public) - could be used from outside MakeEmp
    empObj.setTitle = function (newTitle) {
        title = newTitle;
        display(); // show updated property on the page
    };

    // public method to modify price 
    empObj.changeSalary = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing salary by this rate " + n);
        salary = salary * (1 + n);
        display(); // show updated price on the page
    };

    // Build the UI.
    empObj.innerHTML = `
      <div class='empInfoClass'></div>
    
      <button class='nameButtonClass'>Change Name to: </button>
      <input class='nameInputClass'/> <br/>
    
      <button class='titleButtonClass'>Change Title to: </button>
      <input class='titleInputClass'/> <br/>
    
      <button class='salaryButtonClass'>Change Salary By Factor: </button>
      <input class='salaryFactorInputClass'/> 
    `;

    // Create variable references for all DOM elements (above) that we need to programatically access. 
    var empInfo = empObj.getElementsByClassName("empInfoClass")[0];
    
    var nameButton = empObj.getElementsByClassName("nameButtonClass")[0];
    var nameInput = empObj.getElementsByClassName("nameInputClass")[0];
    
    var titleButton = empObj.getElementsByClassName("titleButtonClass")[0];
    var titleInput = empObj.getElementsByClassName("titleInputClass")[0];
    
    var salaryButton = empObj.getElementsByClassName("salaryButtonClass")[0];
    var salaryFactorInput = empObj.getElementsByClassName("salaryFactorInputClass")[0];

    // private method display, refreshes the Info div with current values for 
    // condition and price. 
    var display = function ( ) {
        empInfo.innerHTML = `
          <p>
             Employee Name: ${empObj.name}<br/>
             Title: ${title} <br/>
             Salary: ${formatCurrency(salary)}
          </p>
          <img src='${imgURL}'/>
        `;
    };
    display(); // do this or the empInfo area will be blank initially

    nameButton.onclick = function () {
        empObj.setName(nameInput.value);
    };
    
    titleButton.onclick = function () {
        empObj.setTitle(titleInput.value);
    };

    salaryButton.onclick = function () {
        empObj.changeSalary(salaryFactorInput.value);
    };

    // private function, can only be used within MakeEmp
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    return empObj;
}



