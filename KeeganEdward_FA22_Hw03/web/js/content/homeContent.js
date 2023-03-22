function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `
            <p style="text-align:center;">
                <img src="pics/re.jpg" style="width:50%; border-radius:10px;">
            </p>
        <h3>Home</h3>
        <p>
            Welcome to Edward Keegan's real estate website. 
            
    
        </p>
        <p>
            Where you can 
            <li>
            Buy
            </li>
            <li>
            Sell
            </li>
            <li>
            Invest
            </li>
         
        </p>
        </p>
    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
}