function homesContent() {
 var content = ` 
      <h4>Homes</h4>
      <p>
        Here are some really cool Homes. 
      </p>
    `;
 var ele = document.createElement("div");
    ele.innerHTML = content;
    
 var homesContainer = document.createElement("div");
    homesContainer.appendChild(homesContainer);


 var home1 = Makehomes( {img: "pics/home01,jpg" , type: "RES", price: 2500} );
    document.getElementById("container").appendChild(home1);
 var home2 = Makehomes( {img: "pics/home02,jpg" , type: "COM", price: 2500} );
    document.getElementById("container").appendChild(home2);
 var home3 = Makehomes( {img: "pics/home03,jpg" , type: "RES", price: 2500} );
    document.getElementById("container").appendChild(home3);
   
    return ele;
}