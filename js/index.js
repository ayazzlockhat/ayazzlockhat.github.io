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
      document.getElementById("main").style.marginRight = "250px";
    }
    
    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginRight = "0";
    }