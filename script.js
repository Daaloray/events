
const fileInput = document.getElementById('file-input');
const fileLabel = document.querySelector('#file-chosen');
const checkIcon = document.querySelector('.fa-check-circle')

fileInput.addEventListener('change', (event) => {
  const fileName = event.target.files[0].name;
  const trimmedFileName = fileName.length > 8 ? fileName.substring(0,8) + '...': fileName
  fileLabel.textContent = trimmedFileName;
  checkIcon.style.display = "inline";
});



document.addEventListener("DOMContentLoaded", function() {
  var slideDiv = document.getElementById("slideDiv");
  var scrollThreshold = 100; // Adjust the desired scroll threshold here

  window.addEventListener("scroll", function() {
    var scrollPos = window.scrollY || window.pageYOffset;

    if (scrollPos > scrollThreshold) {
      slideDiv.classList.remove("show");
    } else {
      slideDiv.classList.add("show");
    }
  });
});
