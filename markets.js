const newsData = [
    {
      title: "Top News Title",
      description: "This is the latest top news description.",
      img: "https://via.placeholder.com/250x150"
    },
    {
      title: "Buzzing Stocks Title",
      description: "Stocks buzzing in the market right now.",
      img: "https://via.placeholder.com/250x150/0073e6"
    },
    {
      title: "Latest News Title",
      description: "Breaking news from around the world.",
      img: "https://via.placeholder.com/250x150/ff5733"
    },
    {
      title: "Hindi News Title",
      description: "Latest updates in Hindi.",
      img: "https://via.placeholder.com/250x150/28a745"
    },
    {
      title: "Podcast News Title",
      description: "Listen to the latest podcasts here.",
      img: "https://via.placeholder.com/250x150/ffc107"
    }
  ];

  let currentIndex = 0;

  function updateCarousel (index){
    const {title,description,img}=newsData[index];
    document.getElementById('carousel-title').textContent = title;
    document.getElementById('carsouel-description').textContent;
    document.getElementById('carsouel-img').src = img;


document.querySelectorAll('.navbar a').forEach((btn,i)=>
{
  if(i==index){
    btn.classList.add('active')

  }else{
    btn.classList.remove('active');
  }
});
}
setInterval(()=>{
    currentIndex = (currentIndex+1)%newsData.length;
    updateCarousel(currentIndex);
},2000);
document.querySelectorAll('.navbar a').forEach((btn)=>
{
btn.addEventListener('click',() =>
{
    currentIndex = parseInt(btn.dataset.index);
    updateCarousel(currentIndex);
});
});
updateCarousel(currentIndex);