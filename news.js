const cards = document.querySelectorAll('.opinion-card');
const dots = document.querySelectorAll('.dot');
dots.forEach((dot,index)=>{
     dot.addEventListener('click',()=>{
        document.querySelector('.opinion-card.active').classList.remove('active');
        document.querySelector('.dot.active').classList.remove('active');
        cards[index].classList.add('active');
        dot.classList.add('active');
     });


});