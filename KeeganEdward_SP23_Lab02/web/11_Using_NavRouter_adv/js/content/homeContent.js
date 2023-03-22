function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `
        <style> /* no big gap between h4 and p */
            h4 + p {margin-top:-1rem;}
        </style>
        
        <h3>Home</h3>
        <p>
            This page explains how to use the more sophisticated features of the NavRouter component. 
            (Please refer to explanations on the previous example "using_NavRouter", to learn about 
            basic NavRouter functionality.) Advanced NavRouter features include:
        </p>
    
        <ul>
            <li>
                drop down menus,
                <ul>
                    <li>
                      See how "Search" and "Tutorial" drop down menus are specified in MyNavList
                      in the code example below (it's pretty self-explanatory).
                    </li>
                </ul>
            </li>
            <li>
                links that open up pages (e.g., HTML pages or PDFs) in a new tab, 
                <ul>
                    <li>
                     See "Proposal" and "Proof Of Concept" links under the "Tutorial" drop down menu.
                     All you have to do is provide a character string action attribute (rather than 
                     an actual JS function). 
                    </li>
                </ul>
            </li>
            <li>
                referencing CGFs (content generating functions) that call other reusable JS functions, 
                <ul>
                    <li>
                    This doe not require any special input to the NavRouter. I'm just showing you 
                    how your code should be organized for this. 
                    </li>
                </ul>
            </li>
            <li>
                use of "local storage" (the new cookies) to "remember" the last nav link 
                you clicked and keeps you looking at that content when you refresh the page.
                <ul>
                    <li>
                    This doe not require any special input to the NavRouter. I'm just showing you 
                    how the NavRouter works, which is nice when you are testing your code. 
                    You do not have to repeatedly start out from Home content and click to the 
                    Nav Link that you are trying to test. 
                    </li>
                </ul>
            </li>
        </ul>
    
        <pre>
    &lt;script>

        /* This example code will create a Nav Bar that shows this: 
              Home | Account | Search | Tutorial | Blog
           In this example, Home and Blog are links, whereas Search and Tutorial 
           are Drop Down Menu Headers (with a list of links that open up when you click on 
           the Drop Down Header). 
    
           Proposal and Proof of Concept links (under Tutorial) demonstrate how you can 
           have the NavRouter open a new page (like html page or pdf) in a new tab, just 
           by providing an action that is text (rather than a JS function). 
        */ 

        var myNavList = [

            // a "regular link", action attribute is a function name - no quotes aroudnd homeContent.
            {linkText: "Home", linkURL: "#/home", action: homeContent},
    
            // not showing Account drop down but it's in the code
    
            {
                header: "Search",
                subMenu: [
                    {linkText: "Objects", linkURL: "#/objects", action: objContent},
                    {linkText: "Slide Show"},
                    {linkText: "Click Sort"}
                ]
            },
            {
                header: "Tutorial", // These 2 links open up a page (or PDF) in a new tab, 
                                    // because the action attribute is not a JS function.
                subMenu: [
                    {linkText: "Proposal", linkURL: "#/proposal", action: "tutorial/proposal.pdf"},
                    {linkText: "Proof Of Concept", linkURL: "#/tutPOC", action: "tutorial/poc.html"},
                    {linkText: "Demo"},
                    {linkText: "Tutorial Home"}
                ]
            },

            // action attribute is a function name - no quotes around blog.
            {linkText: "Blog", linkURL: "#/blog", action: blogContent}
        ];

        var myNav = MakeNavRouter({
            navId: "nav",           // this is the id of the div where the nav bar will be injected
            navList: myNavList,     // the array of objects specified above (object properties: linkText, linkURL, actions)
            contentId: "content",   // the id where content is to be injected
            startLink: "#/home"     // routing will set this as the first link. 
        });

    &lt;/script>        </pre>
    
           You must reference all the CGFs (Content Generating Functions) that are mentioned in 
           myNavLink. So keep the links to homeContent.js and blogContent.js (as in the last example). 
           In this example, we added a reference to objContent.js, so link to that:              
        </p>
    
        <pre>
    &lt;script src="js/content/objContent.js">&lt;/script> </pre>       

        <p>
            Function objContent (in file objContent.js) references function MakeObj, so we need a link to that:           
        </p>
    
        <pre>
    &lt;script src="js/reusable/MakeContent.js">&lt;/script> </pre>
    
        <p>
           You'll also need to reference the JavaScript code that creates a NavRouter:          
        </p>
    
        <pre>
    &lt;script src="js/reusable/MakeNavRouter.js">&lt;/script>  </pre>
    
        <p>
            And you'll need to place a reference to a style sheet that styles a NavRouter: 
        </p>
    
        <pre>
    &lt;link href="style/NavRouter.css" rel="stylesheet" type="text/css" />   </pre>
    
    <p>
        To see all the code where it needs to be, just right click this page and View Source !
    </p>
    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }