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
            This page is a very simple Single Page Application which means that each nav link 
            (when clicked) causes content to be generated then injected into the content area. 
            No new page is loaded and it's not Single Page Design where you merely advance to 
            a different part of your page. 
        </p>
        <p>
            A very important concept in this course is "Provider Style Coding" (reusable code 
            provided by one programmer, to be used by other programmers).  In this module, you'll learn 
            how to be a Consumer of my "NavRouter" which is a fairly sophisticated (Provider Style)
            JavaScript component that helps programmers easily implement a Single Page Application. 
            Later in the semester, you'll learn how to write your own Provider Style Code,
            but for now, you are just learning how to be a Consumer of such code.
        </p>
        <h4>Here is how my NavRouter component implements the Single Page Application</h4>
        <p>
            You tell it the links you want in the nav bar. For each "link text" (that will actually 
            show in the nav bar), you specify:
        </p>
        <ol>
            <li>
                the linkURL that you want to see in the browser's address bar when that Nav link 
                is clicked, and 
            </li>
            <li>
                the Content Generating Function that should be run whenever the router code notices 
                the address bar changing to that linkURL. 
            </li>
        </ol>
            After building the visible Nav Bar (Dom Element), the NavRouter 
            injects that Nav Bar into the page (where specified by the consumer). The NavRouter 
            then "watches" the browser's address bar. For each new URL it sees, it invokes the 
            Content Generating Funtion (CGF) that's associated with that URL and injects that content 
            into the content area of the page (wherever the consumer said the content should go). 
        </p>
        </p>
            Generally speaking, you provide this input to my NavRouter: 
        </p>
        <ul>
            <li>
                The id within your page where you want the Nav Bar to be placed
                (at page load time).
            </li>
            <li>
                The id within your page where you want the content to be injected
                (every time a nav link is clicked by a user).
            </li>
            <li>
                For each link in the Nav Bar, you supply: 
                <ul>
                    <li>
                        The text to be turned into a link.  
                    </li>
                    <li>
                        The internal link (URL) that my NavRouter will build (as href) 
                        attribute of that link. 
                    </li>
                    <li>
                        The content generating function that should be run whenever the 
                        NavRouter sees that URL.  
                    </li>
                </ul>
            </li>
        </ul>

        </ul>
    
          <p>
                Here's an example of setting up the array to specify the nav bar, 
                then invoking the MakeNavRouter function with the proper inputs.
            </p>
        </div>
    
        <pre>
    &lt;script>

        /* This example code will create a simple Nav Bar that shows this: 
              Home | Blog
           Whenever you click on Home or Blog, the appropriate CGF (content generating 
           funtion) will be run and its output injected into the content area (where ever 
           specified by the consumer).  
        */ 

        var myNavList = [

            // action attribute is a function name - no quotes aroudnd homeContent.
            {linkText: "Home", linkURL: "#/home", action: homeContent},


            // action attribute is a function name - no quotes around blogContent.
            {linkText: "Blog", linkURL: "#/blog", action: blogContent}
        ];

        var myNav = MakeNavRouter({
            navId: "nav",           // this is the id of the div where the nav bar will be injected
            navList: myNavList,     // the array of objects specified above (object properties: linkText, linkURL, actions)
            contentId: "content",   // the id where content is to be injected
            startLink: "#/home"     // routing will set this as the first link. 
        });

    &lt;/script>        </pre>
    
        <p>
            Two CGFs (Content Generating Functions) were referenced by the object array (above), so you must also 
            include references to these functions: homeContent and blogContent.               
        </p>
    
        <pre>
    &lt;script src="js/content/blogContent.js">&lt;/script>
    &lt;script src="js/content/homeContent.js">&lt;/script>  </pre>
    
    
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
    
        <p style="margin-left:4.5rem">
            Notice that all the styles in NavRouter.css are "localized" by preceding each 
            CSS selector with ".NavRouter". That way the styling from NavRouter.css 
            will only affect DOM elements that are classed "NavRouter" - instead of 
            conflicting with other styling in your site. Reusable components need to 
            avoid name conflicts with the consumer's code. 
        </p>
        
      
    
    <p>
        To see all the code where it needs to be, just right click this page and View Source !
    </p>
    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
}