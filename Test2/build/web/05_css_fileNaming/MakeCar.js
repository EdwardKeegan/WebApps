function MakeCar (title, imageFileName) {
    var obj = document.createElement("div");
    obj.classList.add("carStyle");
    var heading = document.createElement("h2");
    heading.innerHTML = title;
    obj.appendChild(heading);
    var image = document.createElement("img");
    image.src=imageFileName;
    obj.appendChild(image);
    return obj;
}