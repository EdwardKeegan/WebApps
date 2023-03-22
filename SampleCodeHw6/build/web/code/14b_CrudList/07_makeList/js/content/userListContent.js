"use strict";

function userListContent() {

    var userListDiv = document.createElement("div");

    ajax("json/users.json", processUserList, userListDiv);

    function processUserList(userList) {

        // defining how you want the objects shown in the child elements within the list
        var displayTemplate = "<img src='${obj.image}'/> <span>${obj.userEmail}</span>";

        userListDiv.appendChild(MakeList(userList, displayTemplate));
    }
    return userListDiv;
} // userListComponent