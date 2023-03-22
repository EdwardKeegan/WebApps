function MakeEmp (imgFile, name, title){
    
    var element = document.createElement("div");
    element.classList.add("emp");
    
    var empImage = document.createElement("img");
    empImage.src = imgFile;
    element.appendChild(empImage);
    
    var empName = document.createElement("h3");
    empName.innerHTML = name; 
    element.appendChild(empName);
    
    var empTitle = document.creatElement("h4");
    empTitle.innerHTML = title;
    element.appendChild(empTitle);
    
    return element;
    
    
    
}


