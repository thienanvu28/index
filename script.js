// JavaScript Document

// typing text animation script
    var typed = new Typed(".typing", {
        strings: ["UI/UX Designer", "Graphic Designer", "Photographer"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

 	var typed = new Typed(".typing2", {
        strings: ["UI/UX Designer", "Graphic Designer", "Photographer"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

	//smooth scroll script
	var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
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
			  dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " active";
		}