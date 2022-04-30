var slideIndex2 = 1;
showSlides4(slideIndex2);

function plusSlides3(n) {
  showSlides4(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides4(slideIndex2 = n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  
  if (n > slides4.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";  
  }

  slides4[slideIndex2-1].style.display = "block";  
  
}
