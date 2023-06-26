
 window.addEventListener("load", function () {
  var preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
});




 document.addEventListener('DOMContentLoaded', function() {

  /*Text Shortener for the Event title*/
  var spanElements = document.querySelectorAll('.event-title');

  spanElements.forEach(function(span) {
    var text = span.textContent;
    
    if (text.length > 120) {
      var truncatedText = text.slice(0, 120) + '...';
      span.textContent = truncatedText;
    }
  });



  /*Like button effect*/
      var likeButtons = document.querySelectorAll('.like-icon');

      likeButtons.forEach(function(likeButton) {
        likeButton.addEventListener('click', function() {
          this.classList.toggle('liked');
        });
      });


/*Bottom Naviagtion Effects*/

      var homeIcon = document.querySelector("#home-icon");
      var searchIcon = document.querySelector("#search-icon");
      var notificationIcon = document.querySelector("#notification-icon");
      var moreSettingsIcon = document.querySelector("#more-settings-icon");
      var searchBar = document.querySelector(".search-bar");
      var notificationPopup = document.querySelector(".notification-popup");
      var moreSettingsPopup = document.querySelector(".more-settings-popup");

      homeIcon.addEventListener("click", function () {
        scrollToTop();
        closeMenus();
      });

      searchIcon.addEventListener("click", function () {
        closeMenus();
        searchBar.style.display = "block";
      });

      notificationIcon.addEventListener("click", function () {
        closeMenus();
        notificationPopup.style.display = "block";
      });

      moreSettingsIcon.addEventListener("click", function () {
        moreSettingsPopup.style.display = "block";
      });

      document.addEventListener("click", function (event) {
        var target = event.target;
        if (
          !target.closest(".more-settings-popup") &&
          !target.closest("#more-settings-icon")
        ) {
          moreSettingsPopup.style.display = "none";
        }
      });

      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      function closeMenus() {
        searchBar.style.display = "none";
        notificationPopup.style.display = "none";
      }



    });




    






/*Javascript codes for the Admin Dashboard*/

const fileInput = document.getElementById('file-input');
const fileLabel = document.querySelector('#file-chosen');
const checkIcon = document.querySelector('.fa-check-circle')

fileInput.addEventListener('change', (event) => {
  const fileName = event.target.files[0].name;
  const trimmedFileName = fileName.length > 8 ? fileName.substring(0,8) + '...': fileName
  fileLabel.textContent = trimmedFileName;
  checkIcon.style.display = "inline";
});































/*document.addEventListener("DOMContentLoaded", function() {
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
}); */





  
