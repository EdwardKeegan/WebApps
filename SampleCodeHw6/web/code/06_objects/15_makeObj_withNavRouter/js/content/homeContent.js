function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h3>Click On Search Objects...</h3>
        <p>
            to see a Content Generating Function (which uses your reusable Make Function)
            called by an index page that uses the NavRouter.
        </p>
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }