"use strict";
function blogContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
        <h3>My Blog</h3>
        <h5>HomePage Homework</h5>
          <p>
            These listings will be made into a database that will organize them 
            <br> with criteria. Some of these fields include:
          </p>
          <ul>
            <li>Purchase price</li>
            <li>Address</li>
            <li>Beds/Baths</li>
          </ul> 
        
           
          <p>
            I have very little web design experience, I hope to develop more skills as this course progresses.<br>
            I have taken an outside course at <a href="https://www.codecademy.com/"target="_blank">Code Academy</a><br>
            It was a nice intro to HTML. 
          </p>
          <p>
            I found the external style sheet to be fairly straight forward, pulling the css code out from the index <br>
            into it's own style sheet and then linking it back to the index was easy. I belive things will become <br>
            more complicated as we progress into using Javascript.
          </p>
        <h5>JS UI Homework</h5>
          <p> I found this homework to be almost easier than the last. In the homepage hw I forgot to change <br>
              the nav css so it did not overlay on the title, I thought the sample code came with it done. With this HW it was already put in which was nice. 
              Having the content of each page as its own js file helps with the management of the website as it becomes larger. <br>
              The Navrouter is a nifty tool for this and injecting the js code that holds the html string. 
          </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}