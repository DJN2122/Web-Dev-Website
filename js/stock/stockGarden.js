var slideIndex2 = 1;
showSlides5(slideIndex2);

function plusSlides4(n) {
  showSlides5(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides5(slideIndex2 = n);
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("mySlides5");
  
  if (n > slides5.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";  
  }

  slides5[slideIndex2-1].style.display = "block";  
  
}
