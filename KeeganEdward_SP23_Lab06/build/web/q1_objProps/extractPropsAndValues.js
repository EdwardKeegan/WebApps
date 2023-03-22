/*
 * Modify the code below so that it returns a div that has one paragraph per property in obj. 
 * (You must iterate over the properties, not knowing what they might be...)
 * Each paragraph shall have this text: 
 *      "The property named XXX has the value YYY".
 * Replace XXX with the property name. Replace YYY with the value of that propery.
 */


function extractPropsAndValues(obj) {
  var div = document.createElement("div");
  div.classList.add("extractProps");

  for (var prop in obj) {
    var para = document.createElement("p");
    para.innerHTML = "The property named " + prop + " has the value " + obj[prop];
    div.appendChild(para);
  }

  return div;
}

// With code something like this: 

    // for every property in object 
    //   create a paragraph
    //   set the innerHTML of the paragraph to the desired text 
    //       "The property named XXX has the value YYY"
    //   append the paragraph to the above div

