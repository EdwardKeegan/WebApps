var httpReq = new XMLHttpRequest();  //For Chrome, Firefox, etc
    var call = "https://api.jikan.moe/v3/search/anime?limit=5&q=Naruto";
    httpReq.open("GET", call);
    console.log("kiwi");
    httpReq.onreadystatechange = function () {
        console.log("apple - state is " + httpReq.readyState);
        if (httpReq.readyState === 4) {
            if (httpReq.status === 200) {
                console.log("orange");
                extractData(JSON.parse(httpReq.responseText)); 
                console.log("banana");
            } else {
                console.log("pear");
            }
        }
    }; // end of function def'n

    console.log("grape");
    httpReq.send(null);
    console.log("peach");

    function extractData(obj) {
        if (obj.results.length < 1) {
            console.log("Cannot find such an episode");
        } else {
             console.log("Synopsis: " + obj.results[0].synopsis);
        }
    }   
    console.log("apricot");
