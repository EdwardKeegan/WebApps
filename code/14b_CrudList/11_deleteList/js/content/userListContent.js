"use strict";

function userListContent() {

    var userListDiv = document.createElement("div");

    ajax("json/users.json", processUserList, userListDiv);

    function processUserList(userList) {

        // defining how you want the objects shown in the child elements within the list
        var userTemplate = "<img src='${obj.image}'/> <span>${obj.userEmail}</span>";

        //function MakeDeleteList({objList, inputSpecs, displayTemplate}) {
        var listComponent = MakeDeleteList({
            objList: userList,
            displayTemplate: userTemplate
        });

        userListDiv.appendChild(listComponent);

        // To show that objects deleted by the user are reflected in the consumer's userList
        var myButton = MakeTag({
            htmlTag: "button",
            innerHTML: "Print User Object List To Console",
            parent: userListDiv
        });
        myButton.onclick = function () {
            console.log(userList);
        };

    }
    return userListDiv;
} // userListComponent