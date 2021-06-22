function myFunction() {
  var x = document.getElementById("mobile-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function resize() {
  if ( $(window).width() > 650) {     
    var x = document.getElementById("mobile-links");
    x.style.display = "none";
  }
  else {
  $("#default").toggleClass('classold classold');
  }
}
$(window).on("resize", resize);
resize();
