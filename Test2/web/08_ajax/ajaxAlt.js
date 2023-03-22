function ajaxAlt(url, good, bad) { // assume chrome
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", url);
    httpReq.onreadystatechange = process;
    httpReq.send(null);
    function process( ) {
        if (httpReq.readyState === 4) {
            if (httpReq.status === 200) {
                var obj = JSON.parse(httpReq.responseText);
                console.log("URL "+url+" success");
                good(obj, "AOK");
            } else {
                console.log("URL "+url+" failure");
                bad("Cannot read url: " + url);
            }
        }
    }
    console.log("AjaxAlt: "+url);
} // end function ajaxAlt
