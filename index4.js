let cuurentslide = 1;
showSlide(currentSlide);

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[n - 1].classList.add('active');
  dots[n - 1].classList.add('active');
}
