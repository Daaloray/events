
 document.addEventListener('DOMContentLoaded', function() {
  var spanElements = document.querySelectorAll('.event-title');

  spanElements.forEach(function(span) {
    var text = span.textContent;
    
    if (text.length > 120) {
      var truncatedText = text.slice(0, 120) + '...';
      span.textContent = truncatedText;
    }
  });
});

 document.addEventListener('DOMContentLoaded', function() {
      var likeButtons = document.querySelectorAll('.like-icon');

      likeButtons.forEach(function(likeButton) {
        likeButton.addEventListener('click', function() {
          this.classList.toggle('liked');
        });
      });
    });




    
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
  var isDivVisible = true;

  // Initially show the slideDiv
  slideDiv.classList.add("show");

  function handleScroll() {
    var scrollPos = window.scrollY || window.pageYOffset;

    if (scrollPos > scrollThreshold && isDivVisible) {
      slideDiv.classList.remove("show");
      isDivVisible = false;
    } else if (scrollPos <= scrollThreshold && !isDivVisible) {
      slideDiv.classList.add("show");
      isDivVisible = true;
    }
  }

  window.addEventListener("scroll", handleScroll);
});





  
