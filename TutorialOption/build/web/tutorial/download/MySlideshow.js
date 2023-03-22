function MySlideshow(imgs) {
  // Get the modal element
  var modal = document.getElementById("myModal");

  // Get the image element and insert it inside the modal
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgs.src;

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}
