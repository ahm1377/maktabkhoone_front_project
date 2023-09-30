$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      // event.preventDefault();

      // Store hash
      var hash = this.hash;
      var targetoffset = $(hash).offset().top - 60;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: targetoffset
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


var slideIndex = 1;
var timer;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#bbb";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.backgroundColor = "#007bff";
  
  // تنظیم تایمر برای تغییر اسلاید هر 5 ثانیه
  timer = setTimeout(function() { plusSlides(1); }, 5000);
}

// تنظیم تایمر اولیه
timer = setTimeout(function() { plusSlides(1); }, 5000);

// توقف تایمر در صورت رفتن موس روی اسلایدر
var slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseover', function() {
  clearTimeout(timer);
});

// شروع تایمر در صورت خروج موس از اسلایدر
slideshowContainer.addEventListener('mouseout', function() {
  timer = setTimeout(function() { plusSlides(1); }, 5000);
});
//  هنگام کلیک بزرگتر شدن دکمه اسلاید شو
$(".prev").on("click",(e)=>{
  document.style.transform.scale(1.2);
})
$(".next").on("click",(e)=>{
  document.style.transform.scale(1.2);
})