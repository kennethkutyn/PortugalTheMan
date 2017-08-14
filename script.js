$('#navigation').onePageNav({
  currentClass: 'current',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',
  begin: function() {
    //I get fired when the animation is starting
  },
  end: function() {
    //I get fired when the animation is ending
  },
  scrollChange: function($currentListItem) {
    //I get fired when you enter a section and I pass the list item of the section
  }
});



$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 330) {
         document.getElementById("fixedTest").className += " scrolledNavigation";
         console.log("changed Color");
      }
      if ($(this).scrollTop() < 330) {
         document.getElementById("fixedTest").classList.remove("scrolledNavigation")
      }
   });
});

