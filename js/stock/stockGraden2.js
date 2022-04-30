var slideIndex2 = 1;
showSlides6(slideIndex2);

function plusSlides5(n) {
  showSlides6(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides6(slideIndex2 = n);
}

function showSlides6(n) {
  var i;
  var slides6 = document.getElementsByClassName("mySlides6");
  
  if (n > slides6.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides6.length}
  for (i = 0; i < slides6.length; i++) {
      slides6[i].style.display = "none";  
  }

  slides6[slideIndex2-1].style.display = "block";  
  
}
