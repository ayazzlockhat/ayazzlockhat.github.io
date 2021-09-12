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
      prevScrollpos = currentScrollPos;
    }
};