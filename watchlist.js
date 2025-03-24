const steps = document.querySelectorAll('.step');
const slides = document.querySelectorAll('.slide');
const highlightline=document.querySelector('.highlight-line');
function updateslide(index){
    steps.forEach(step=>step.classList.remove('active'));
    slides.forEach(slide=>slide.classList.remove('active'));

    steps[index].classList.add('active');
    slides[index].classList.add('active');

    const stepWidth = steps[index].offsetWidth;
    const stepPosition = steps[index].offsetLeft;
    highlightline.style.width = `${stepWidth}px`;
    highlightline.style.left = `${stepPosition}px`;
}
steps.forEach((step,index)=>{
    step.addEventListener('click',()=>{
        updateslide(index);
    });
});

window.onload =()=>updateslide(0);
const advisoryAlert = document.querySelector('.advisory-alert');

function showAlert(){
    advisoryAlert.style.opacity='1';
    setTimeout(hideAlert, 3000);
}
function hideAlert(){
    advisoryAlert.style.opacity='0';
    setTimeout(showAlert, 3000);
}
showAlert();
