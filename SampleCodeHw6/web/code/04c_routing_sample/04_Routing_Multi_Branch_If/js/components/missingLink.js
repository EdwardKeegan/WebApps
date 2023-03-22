function missingLink() {
    var content = `
        <h4>Content Not Found</h4>
        <p>
            So sorry, we cannot find that information for you. 
        </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}