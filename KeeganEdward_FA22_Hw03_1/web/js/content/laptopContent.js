function twoLaptops() {
	var content = `
        <div id="noticable">
        <h2>Example for JS HW03</h2>
        <p>
        Below are <b>laptop objects</b> that will be displayed to the user who created the laptop post.  You can modify the specifications of a laptop by typing into their corresponding input fields and clicking the button to the left.  Title and CPU will take <b>any text</b> (must be at least 1 character), image will take a <b>local file or URL</b> and RAM will take <b>any real number</b>.  If you were to put something that isn't a real number it will complain in the console that you've done such a thing and not change the RAM.
        </p>
        </div>
    `;


    var MAINDIV = document.createElement("div");
    MAINDIV.innerHTML = content;

    var productsContainer = document.createElement("div");
    productsContainer.classList.add("productsContainer");

    productsContainer.appendChild(MakeLaptop({
        title: "ASUS Zephyrus G503AQR",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTanhsLgO2TjByUG5sYF3vfffa_2NbZFWpR8jHiRSwVIb1XdGPTCdLUDVYfuK5H92M0eGkRmHq5_LR94KUQeG5siPHXhzxg",
        processor: "Ryzen 9 5900HS",
        ram: 40.0
    }));

    var options = {
        title: "Huawei Matebook 13",
        image: "images/laptops/laptop-default.png",
        processor: "i5 8250u",
        ram: 8.0
    }

    productsContainer.appendChild(MakeLaptop(options));
    
    MAINDIV.appendChild(productsContainer);

    return MAINDIV;
}