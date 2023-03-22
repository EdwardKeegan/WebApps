function home() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
      <p>
        This is my Home Page Content !!! 
        Click on the links in the nav bar.
      </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele; 
}