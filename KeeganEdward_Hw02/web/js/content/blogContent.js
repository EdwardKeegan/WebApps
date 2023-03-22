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
        
    
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}