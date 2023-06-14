
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
  var scrollThreshold = 80; // Adjust the desired scroll threshold here
  var isDivVisible = true;
  var isScrolling = false;
  
  // Initially show the slideDiv
  slideDiv.classList.add("show");

  function debounce(func, delay) {
    var timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        func();
      }, delay);
    };
  }

  function handleScroll() {
    var scrollPos = window.scrollY || window.pageYOffset;

    if (scrollPos > scrollThreshold && isDivVisible) {
      slideDiv.classList.remove("show");
      isDivVisible = false;
    } else if (scrollPos <= scrollThreshold && !isDivVisible) {
      slideDiv.classList.add("show");
      isDivVisible = true;
    }
    
    isScrolling = false;
  }

  window.addEventListener("scroll", function() {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(function() {
        handleScroll();
      });
    }
  });

  var debouncedHandleScroll = debounce(handleScroll, 200);
  window.addEventListener("scroll", debouncedHandleScroll);
});
