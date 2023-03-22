function carContent() {

    var carComponent = document.createElement("div");
    
    var carList = [
        {make: "Buick", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/buick.png", available: "2/1/1890", condition: "poor", price: 15000},
        {make: "Ford", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/ford.png", available: "1/2/2020", condition: "great", price: ""},
        {make: "Audi", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/audi.png", available: "", condition: "excellent", price: "$5000"},
        {make: "Pixar", image: "http://cis-linux2.temple.edu/~sallyk/pics_car/pixar.png", available: "9/7/1940", condition: "fair", price: 21000}
    ];
    
    
    // creating a new array so we can better control what's in it, the property names (that become
    // column headings... 
    var newCarList = []; // empty array
    for (var i = 0; i < carList.length; i++) {
        newCarList[i] = {}; // set the i-th element of the new array to be an empty object.
        newCarList[i].Make = SortableTableUtils.makeText(carList[i].make);
        newCarList[i]._Image = SortableTableUtils.makeImage(carList[i].image, "10rem");
        newCarList[i].Condition = SortableTableUtils.makeText(carList[i].condition);
        newCarList[i].Price = SortableTableUtils.makeNumber(carList[i].price, true); // true --> format as currency
        newCarList[i].Available = SortableTableUtils.makeDate(carList[i].available);
    }


    // It's helpful to copy/paste a comment showing the function you are calling, so you 
    // name the parameter object properties correctly... 
    // function MakeClickSortTable( { objList, initialSortCol, sortIcon } ) {
    
    var clickSortComp = MakeClickSortTable({
        objList: newCarList,
        initialSortCol: "Price", // if omitted, sort is by first column/property (e.g., "Make") 
        sortIcon: "icons/sortUpDown16.png"
    });

    carComponent.appendChild(clickSortComp);

    return carComponent;
}