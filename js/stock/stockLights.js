var slideIndex2 = 1;
showSlides3(slideIndex2);

function plusSlides2(n) {
  showSlides3(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides3(slideIndex2 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  
  if (n > slides3.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }

  slides3[slideIndex2-1].style.display = "block";  
  
}



