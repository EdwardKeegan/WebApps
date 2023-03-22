function newFind() {

  var findDiv = document.createElement("div");
  findDiv.classList.add("find");

  var minFeeSpan = document.createElement('span');
  minFeeSpan.innerHTML = "Membership Fee > ";
  findDiv.appendChild(minFeeSpan);

  var membershipFeeInput = document.createElement("input");
  membershipFeeInput.setAttribute("type", "text");
  findDiv.appendChild(membershipFeeInput);

  var maxBirthdaySpan = document.createElement('span');
  maxBirthdaySpan.innerHTML = "Birthday < ";
  findDiv.appendChild(maxBirthdaySpan);

  var birthdayInput = document.createElement("input");
  birthdayInput.setAttribute("type", "text");
  findDiv.appendChild(birthdayInput);

  var findButton = document.createElement("button");
  findButton.innerHTML = "Find";
  findDiv.appendChild(findButton);

  var msgDiv = document.createElement("div");
  findDiv.appendChild(msgDiv);

  findButton.onclick = function () {
    var url = "webAPIs/getUserAlt.jsp?minMembershipFee=" + escape(membershipFeeInput.value) +
              "&maxBirthday=" + escape(birthdayInput.value);            

    console.log("onclick function will make AJAX call with url: " + url);
    ajax(url, processFind, msgDiv);

    function processFind(obj) {
     var msg = "";
            console.log("Successfully called the find API. Next line shows the returned object.");
            console.log(obj);
            if (obj.errorMsg.length > 0) {
                msg += "<strong>Error: " + obj.errorMsg + "</strong>";
            } else {
                msg += "<strong>Welcome Web User " + obj.webUserId + "</strong>";
                msg += "<br/> Birthday: " + obj.birthday;
                msg += "<br/> MembershipFee: " + obj.membershipFee;
                msg += "<br/> User Role: " + obj.userRoleId + " " + obj.userRoleType;
                msg += "<p> <img src ='" + obj.image + "'></p>";
            }
      msgDiv.innerHTML = msg;
    }
  };  // onclick function

  return findDiv;
}
