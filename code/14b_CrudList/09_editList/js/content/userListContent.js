"use strict"; 

function userListContent() {

    var userListDiv = document.createElement("div");

    ajax("json/users.json", processUserList, userListDiv);

    function processUserList(userList) {

        // Defining the edit area and how values will be validated.
        var userInputSpecs = [
            {
                "prompt": "User Email: ",
                "fieldName": "userEmail",
                "dataType": "string",
                "minLen": 1, // required field
                "maxLen": 50
            },
            {
                "prompt": "User Image (URL): ",
                "fieldName": "image",
                "dataType": "string",
                "minLen": 0, // empty string is OK
                "maxLen": 500
            },
            {
                "prompt": "Birthday: ",
                "fieldName": "birthday",
                "dataType": "date",
                "minLen": 0 // means optional
            },
            {
                "prompt": "Membership Fee: ",
                "fieldName": "membershipFee",
                "dataType": "number",
                "minLen": 0, // means optional
                "maxLen": 10 // 10 characters including decimal point
            }
        ];

        // defining how you want the objects shown in the child elements within the list
        var displayTemplate = "<img src='${obj.image}'/> <span>${obj.userEmail}</span>";

        userListDiv.appendChild(MakeEditList(userList,userInputSpecs, displayTemplate));
        
        // To show that the consumer's userList is updated with objects edited by the user
        var myButton = MakeTag({
           htmlTag:"button",
           innerHTML: "Print User Object List To Console",
           parent: userListDiv
        });
        myButton.onclick = function() {
            console.log(userList);
        };
    }
    return userListDiv;
} // userListComponent