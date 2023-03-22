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
          <img src="pics/Database.PNG" alt="Database Table" 
            style="width: 50%; height: 10%; border: 1px solid black; border-radius: 10px;">
           
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
        <h5>JS Object Homework</h5>
            <p>I did not find anything about this homework as easy. We are starting to handle many files and javascript, which is increasing in the amount of small mistakes I am making.<br>
               Using the console can point you in the right direction, my homescontent said it was not linking correctly. At first I thought I made a typo adding it as a source to the Index.html, but that was not the case <br>
               I spent a while going through each file and finaly realized I had used the ele function twice so it was causing an error. <br>
               I made the "Other" Table already as you can see below to show the different data members. 
            </p>
        <h5>Database</h5>
            <p>I do not have much expereince in databases, but I am currently taking the databse course elective and have been writing a lot of SQL statements. <br>
               we are using a set of tables given to us in Oracle SQL Developer and then modifiying and sorting the data to display different outputs. 
            </p>
            <p>I found this HW to be quite easy and the table design to be straightforward. With my knowledge for the databse course the join statements were easy to do.<br>
               Click <a target="_blank" href='pics/KeeganEdward_SP23_Hw04.pdf'>here</a> to see my database document. 
            </p>  
              
          

    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}