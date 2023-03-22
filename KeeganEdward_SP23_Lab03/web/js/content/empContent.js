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
    
  
            // name, title, salary, img
    var emp1 = MakeEmp("Sally", "CEO", 5000, "pics_users/abha.jpg");
        empContainer.appendChild(emp1);
            
    var emp2 = MakeEmp("Edward","COO" , 2500, "pics_users/ed.jpg");
        empContainer.appendChild(emp2);
          // third makeEmp call with no paremeter properties  
    var emp3 = MakeEmp();
        empContainer.appendChild(emp3);
       

   return ele;
}