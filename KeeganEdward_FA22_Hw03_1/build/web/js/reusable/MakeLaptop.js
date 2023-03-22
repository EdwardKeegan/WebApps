function MakeLaptop(paramObject) {
	var product = document.createElement("div");

	// private data members
	var imageName = (paramObject.image != null) ? paramObject.image : "/images/laptops/laptop-default.png";
	var processorName = (paramObject.processor != null) ? paramObject.processor : "Generic Processor";
	var ramAmount = (paramObject.ram != null) ? paramObject.ram : 1.0;
	product.classList.add("productItem");

	// One public data member
	product.givenTitle = (paramObject.title != null) ? paramObject.title : "Generic Laptop";

	// PRODUCT DISPLAY (main div)  
	var specifications = document.createElement("div");
	// specifications.setAttribute("class", "specifications");
	specifications.imageName = imageName;

	// TITLE
	var titleButton = document.createElement("button");
	titleButton.innerHTML = "Set title:";
	var newTitleInput = document.createElement("input");

	// IMAGE
	var imageButton = document.createElement("button");
	imageButton.innerHTML = "Set image:";
	var newImageNameInput = document.createElement("input");

	// CPU
	var processorButton = document.createElement("button");
	processorButton.innerHTML = "Set CPU:";
	var newProcessorInput = document.createElement("input");

	// RAM creation
	var ramButton = document.createElement("button");
	ramButton.innerHTML = "Add RAM:";
	var newRamInput = document.createElement("input");

	// --------------- Public mutator functions ---------------
	product.setTitle = function (newTitleName) { // Edit product title
		if (newTitleName.length == 0) {
			console.log("Please enter input before trying to change the TITLE!");
			return;
		}

		product.givenTitle = newTitleName;
		display();
	}
	product.setImage = function (newImageName) { // Edit product image
		if (newImageName.length == 0) {
			console.log("Please enter input before trying to change the IMAGE!");
			return;
		}

		imageName = newImageName;
		display();
	}
	product.setCPU = function (newProcessorName) { // Edit product processor name
		if (newProcessorName.length == 0) {
			console.log("Please enter input before trying to change the CPU!");
			return;
		}

		processorName = newProcessorName;
		display();
	}
	product.changeRAM = function (ramAddition) { // Edit product ram amount
		var num = Number(ramAddition);

		// Ensures we're getting valid input
		if (!Number.isFinite(Number(ramAddition))) {
			console.log(ramAddition + " is not a number!");
			return;
		}

		if ((ramAmount + num) < 1) {
			console.log("A computer listing must have a minimum of 1GB RAM!");
			return;
		}

		ramAmount += num;
		display();
	}

	// --------------- Click Events ---------------
	imageButton.onclick = function () {
		console.log("Clicked IMAGE button!");
		product.setImage(newImageNameInput.value);
	}
	processorButton.onclick = function () {
		console.log("Clicked CPU button!");
		product.setCPU(newProcessorInput.value);
	}
	ramButton.onclick = function () {
		console.log("Clicked RAM button!");
		product.changeRAM(newRamInput.value);
	}
	titleButton.onclick = function () {
		console.log("Clicked TITLE button!");
		product.setTitle(newTitleInput.value);
	}

	// --------------- Output Additions ---------------
	product.appendChild(specifications);
	product.appendChild(titleButton);
	product.appendChild(newTitleInput);
	addNewLine(product);
	product.appendChild(imageButton);
	product.appendChild(newImageNameInput);
	addNewLine(product);
	product.appendChild(processorButton);
	product.appendChild(newProcessorInput);
	addNewLine(product);
	product.appendChild(ramButton);
	product.appendChild(newRamInput);



	// ------------------ asdf ------------------
	// Private display function
	function display() { // Edit HTML
		specifications.innerHTML = product.givenTitle + "<br/>" +
			"<img src=\"" + imageName + "\">" + "<br/>" +
			"CPU: " + processorName + "<br/>" +
			"RAM: " + ramAmount + "gb<br/>";
	}

	display();
	console.log("MakeLaptop Loaded!");
	return product;
}

function addNewLine(object) {
	object.appendChild(document.createElement("br"));
}