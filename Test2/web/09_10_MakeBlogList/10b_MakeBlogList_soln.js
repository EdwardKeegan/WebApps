function MakeBlogList(params) {

    function MakeBlog(obj) {
        var blogDiv = document.createElement("div");
        var header = document.createElement("h3");
        header.innerHTML = obj.bTitle;
        blogDiv.appendChild(header);
        var postHolder = document.createElement("div");
        postHolder.classList.add("postContainer");
        blogDiv.appendChild(postHolder);
        var post = document.createElement("p");
        post.innerHTML = obj.firstPost;
        postHolder.appendChild(post);
        var postInput = document.createElement("input");
        blogDiv.appendChild(postInput);
        var postSubmit = document.createElement("button");
        postSubmit.innerHTML = "Submit";
        blogDiv.appendChild(postSubmit);
        postSubmit.onclick = function () {
            var p = document.createElement("p");
            p.innerHTML = postInput.value;
            postHolder.appendChild(p);
            postInput.value = "";
        };
        return blogDiv;
    }  // MakeBlog

    var blogListDiv = document.createElement("div");
    blogListDiv.classList.add("blog");
    var blogListTitle = document.createElement("h1");
    blogListTitle.innerHTML = params.title || "Mystery Blog";
    var objList = params.objList;
    blogListDiv.appendChild(blogListTitle);
    for (var i = 0; i < objList.length; i++) {
        blogListDiv.appendChild(MakeBlog(objList[i]));
    }
    return blogListDiv;
} // MakeBlogList