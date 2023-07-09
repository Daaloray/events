
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





    });


    var overlay = document.getElementById("overlay");
    var body = document.body;
    
    function openOverlay() {
      overlay.style.display = "block";
      body.classList.add("no-scroll");
    }
    
    function closeOverlay() {
      overlay.style.display = "none";
      body.classList.remove("no-scroll");
    }
    
    
    
    
    var homeIcon = document.querySelector("#home-icon");
    var searchIcon = document.querySelector("#search-icon");
    var notificationIcon = document.querySelector("#notification-icon");
    var moreSettingsIcon = document.querySelector("#more-settings-icon");
    var searchBar = document.querySelector(".search-bar");
    var notificationPopup = document.querySelector(".notification-popup");
    var moreSettingsPopup = document.querySelector(".more-settings-popup");
    var searchnav = document.getElementById("searchnav");
    
    var isSearchBarOpen = false;
    var isNotificationPopupOpen = false;
    var isMoreSettingsPopupOpen = false;
    
    var homeIcon = document.querySelector("#home-icon");
    homeIcon.classList.add("active");
    
    
    homeIcon.addEventListener("click", function () {
      scrollToTop();
      closeMenus();
      closeOverlay();
      homeIcon.classList.add("active");
      searchIcon.classList.remove("active");
      notificationIcon.classList.remove("active");
    });
    
    searchIcon.addEventListener("click", function () {
      isSearchBarOpen = !isSearchBarOpen;
      toggleMenu(searchBar, isSearchBarOpen);
      closeMenusExcept(searchBar);
      closeOverlay();
      if (isSearchBarOpen) {
        searchnav.focus();
        homeIcon.classList.remove("red");
        homeIcon.classList.remove("homesicon");
        homeIcon.classList.remove("active");
        searchIcon.classList.add("active");
      } else {
        searchIcon.classList.remove("active");
        setHomeIconRedIfNoFocus();
      }
    });
    
    document.addEventListener("click", function (event) {
      var targetsch = event.target;
      if (
        !targetsch.closest(".search-bar") &&
        !targetsch.closest("#search-icon")
      ) {
        searchBar.style.display = "none";
        isSearchBarOpen = false;
      }
    });
    
    notificationIcon.addEventListener("click", function () {
      isNotificationPopupOpen = !isNotificationPopupOpen;
      toggleMenu(notificationPopup, isNotificationPopupOpen);
      if (isNotificationPopupOpen) {
        closeMenusExcept(notificationPopup);
        openOverlay();
        homeIcon.classList.remove("red");
        homeIcon.classList.remove("active");
        notificationIcon.classList.add("active");
      } else {
        closeOverlay();
        notificationIcon.classList.remove("active");
        setHomeIconRedIfNoFocus();
      }
    });
    
    
    
    
    moreSettingsIcon.addEventListener("click", function () {
      isMoreSettingsPopupOpen = !isMoreSettingsPopupOpen;
      toggleMenu(moreSettingsPopup, isMoreSettingsPopupOpen);
      if (isMoreSettingsPopupOpen) {
        homeIcon.classList.remove("red");
       
      } else {
        moreSettingsIcon.classList.remove("active");
        setHomeIconRedIfNoFocus();
      }
    });
    
    document.addEventListener("click", function (event) {
      var target = event.target;
      if (
        !target.closest(".more-settings-popup") &&
        !target.closest("#more-settings-icon")
      ) {
        moreSettingsPopup.style.display = "none";
        isMoreSettingsPopupOpen = false;
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
      moreSettingsPopup.style.display = "none";
      isSearchBarOpen = false;
      isNotificationPopupOpen = false;
      isMoreSettingsPopupOpen = false;
    }
    
    function closeMenusExcept(menu) {
      if (menu !== searchBar) {
        searchBar.style.display = "none";
        isSearchBarOpen = false;
        searchIcon.classList.remove("active");
      }
      if (menu !== notificationPopup) {
        notificationPopup.style.display = "none";
        isNotificationPopupOpen = false;
        notificationIcon.classList.remove("active");
      }
      if (menu !== moreSettingsPopup) {
        moreSettingsPopup.style.display = "none";
        isMoreSettingsPopupOpen = false;
        moreSettingsIcon.classList.remove("active");
      }
    
    
    }
    
    function setHomeIconRedIfNoFocus() {
      if (
        !searchIcon.classList.contains("active") &&
        !notificationIcon.classList.contains("active") &&
        !moreSettingsIcon.classList.contains("active")
      ) {
        homeIcon.classList.add("red");
      }
    }
    
    
    function toggleMenu(menu, isOpen) {
      if (isOpen) {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    }
    
    


















    






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





  
