function MakeBlogList(objList, title) {
    console.log("pig");
    function MakeBlog(obj) {
        var blogDiv = document.createElement("div");
        var header = document.createElement("h3");
        header.innerHTML = obj.bTitle;
        blogDiv.appendChild(header);
        var postHolder = document.createElement("div");
        postHolder.classList.add("postContainer");
        blogDiv.appendChild(postHolder);
        var first = obj.firstPost || "Share your thoughts...";
        var post = document.createElement("p");
        post.innerHTML = first;
        postHolder.appendChild(post);
        console.log(obj.bTitle + "-" + first);
        return blogDiv;
    }  // MakeBlog
    console.log(title);
    var blogListDiv = document.createElement("div");
    blogListDiv.classList.add("blog");
    var blogListTitle = document.createElement("h1");
    blogListTitle.innerHTML = title;
    blogListDiv.appendChild(blogListTitle);
    for (var i = 0; i < objList.length; i++) {
        console.log("cat");
        blogListDiv.appendChild(MakeBlog(objList[i]));
    }
    console.log("ant");
    return blogListDiv;
    console.log("bee");
} // MakeBlogList