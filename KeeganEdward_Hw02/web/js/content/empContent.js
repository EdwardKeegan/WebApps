function empContent() {
    var econtent = `
            <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                display:flex; 
                flex-direction: row;
                background-color: grey;
            }
            .flexContainer .obj {
                width: 50%; /* to fit three columns inside the flexContainer */
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
        </style>
        <h3>Employees</h3>
        <p>
            In this JS function, several objects are created and then appended into the 
            content area. 
        </p>
    `;
        var element = document.createElement("div");
        element.innerHTML = econtent; // the HTML code specified just above...
        var objContainer = document.createElement("div");
        objContainer.classList.add('flexContainer'); // see styling in this file, above...
        element.appendChild(objContainer);
        objContainer.appendChild(MakeObj("Abha", "http://cis-linux2.temple.edu/~sallyk/pics_users/abha.jpg", "CEO"));
        objContainer.appendChild(MakeObj("Eduard", "http://cis-linux2.temple.edu/~sallyk/pics_users/eduard.jpg" , "CFO"));
        
        return element;
}


