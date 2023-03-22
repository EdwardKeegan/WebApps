function empContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <h4>Employees</h4>
      <p>
        Here are some really cool Employees. 
      </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;

    var empContainer = document.createElement("div");
    ele.appendChild(empContainer);
    
    var emp1 = MakeEmp("Abha","CFO", 5000, "http://cis-linux2.temple.edu/~sallyk/pics_users/abha.jpg");
    empContainer.appendChild(emp1);

    var emp2 = MakeEmp("Eduard", "CEO", 2500, "http://cis-linux2.temple.edu/~sallyk/pics_users/eduard.jpg");
    empContainer.appendChild(emp2);

    return ele;
}