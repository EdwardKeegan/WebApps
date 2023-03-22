function blogContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
    <h4>Database</h4>
        <p>
            Homes, Contact, About
        </p>
    
    <h4>My Web Development Experience</h4>
        <p>
            I have never had any web dev experience prior to this class.
            I am really enjoying learning HTML and CSS so far. It is nice 
            to see the changes I make in the code right away and visualy. 
            As opposed to other coding languages which are more difficult to visualize.
        </p>
    <h4>HomePage Homework</h4>
        <p>
            I found the HomePage Homework easy. 
            Most of the work was done in the lab activity.
            So really the only work left to do was to implement an external stylsheet.
            Which is really nice to have and cleans up the index.html class.
        </p>
    <h4>JS UI Homework</h4>
        <p>
            I found the JS UI homework to be more difficult. It obsviously added
            more functions and classes to deal with, increasing the difficulty. 
            I found myself becoming confused in certain parts, but was able to complete it.
        </p>
    <h4>Hw04 Databse</h4>
        <p>
            I chose to make a databes table that included listed homes for sale, this alligns with the theme/purpose    
            of my website being centered around real estate. There are multiple feilds I used like beds, baths, type of house, etc.
            I may not end up using all of them or may change them in the future. 
        </P>
    
        <p>
            I found the database lab and homework to be my favorite so far of the course.
            The databse section was pretty straightforward and was a nice change to use MySQL rather
            than soley Netbeans. I felt I understood the databse homework better than the previous ones.  
            Click <a target="_blank" href='KeeganEdward_Hw04.pdf'>here</a> to see my databse document
        </p>
      
       
            
        
           
    `;
       
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}