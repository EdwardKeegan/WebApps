"use strict";
function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 
var content= `
        <h2>About</h2>
            
            <p>
                Helping you buy, sell, invest
            </p>
            <p>
                The web site will provide contact details to clients for myself and the brokerage, as
                well as current market listings.<br> Feel free to get in contact with one of our agents and see how they can help you today.<br> 
                You can also check out properties on <a href="https://www.zillow.com/"target="_blank">Zillow</a>
            </p> 
            
          
            
           
            <p style="text-align:center;">
                <img src="pics/re.jpg" style="width:50%; border-radius:10px;">
            </p>
          

            

        </div> <!-- content. [[Keep track of nesting]] -->

    `;

        
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }