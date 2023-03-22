function infoContent () {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
      <h2>Info</h2>
      <p>
        This is my Info Page Content !!! 
        I love to Sell houses!!
      </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele; 
}