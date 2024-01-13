window.onload = function() {

    // Scrolling Navbar change
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbarscroll").style.top = "0";
      } else {
        document.getElementById("navbarscroll").style.top = "-60px";
      }

      if (prevScrollpos > currentScrollPos) {
        document.getElementById("sidebarscroll").style.top = "0";
      } else {
        document.getElementById("sidebarscroll").style.top = "-200px";
      }

      if (prevScrollpos > currentScrollPos) {
        document.getElementById("mySidebar").style.top = "0";
      } else {
        document.getElementById("mySidebar").style.top = "-275px";
      }
      prevScrollpos = currentScrollPos;
    }
};

    // Mobile SideBar
    function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "600px";
    }
    
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
    
    
    // Work Experience Tabs
    document.addEventListener("DOMContentLoaded", function () {
      var tabs = document.querySelectorAll('.tabs a');
      var contentSections = document.querySelectorAll('.experience-content .content_section');
  
      tabs.forEach(function (tab) {
          tab.addEventListener('click', function (e) {
              e.preventDefault();
  
              tabs.forEach(function (t) {
                  t.classList.remove('active');
              });
  
              tab.classList.add('active');
  
              var tabNumber = tab.getAttribute('data-tab');
  
              contentSections.forEach(function (section) {
                  section.classList.remove('visible');
              });
  
              document.querySelector('.content_section[data-tab="' + tabNumber + '"]').classList.add('visible');
          });
      });
  });
  