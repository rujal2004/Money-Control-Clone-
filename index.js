console.alert("Are you syre you want to refresh")

function toggleAccordion() {
    const content = document.querySelector('.accordion-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
function toggleAccordion1() {
    const content = document.querySelector('.accordion-content1');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
function toggleAccordion2() {
    const content = document.querySelector('.accordion-content2');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
function handleSearch(event) {
    event.preventDefault(); 
    const query = document.getElementById("search-input").value;
    if (query) {
        alert("Searching for: " + query);
    
    } else {
        alert("Please enter a search query.");
    }
}
function flipCard(card) {
    card.classList.toggle("flipped");
}
/*const sidebar =document.getElementById("sidebar")
const content =document.getElementById("content")
let sidebarvisible=false;
function togglesidebar(){
    if(sidebarvisible){
        sidebar.style.left="-250px";
        content.style.marginleft="0";
    }else{
        sidebar.style.left="0";
        content.style.marginleft="250px"
    }
    sidebarvisible!=sidebarvisible;
}
function togglesidebar{
    const sidebar=document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}*/
function togglesidebar() {
    const content = document.querySelector('.sidebar');
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    }
    else {
      content.style.display = 'none';
    }
}
function changelanguage()
{
    const selectedlanguage=document.getElementById('language-selector').value;

    if(selectedlanguage==='en')
    {
        document.body.setAttribute('lang','en');
    }
    else if(selectedlanguage==='hi')
    {
      document.body.setAttribute('lang','hi');
    }
}
/*function toggleSpecials() {
    const carouselContainer = document.getElementById("specialsimages");
    // Toggle display between 'none' and 'block'
    if (carouselContainer.style.display === "none" || carouselContainer.style.display === "") {
      carouselContainer.style.display = "block";
    } else {
      carouselContainer.style.display = "none";
    }
  }
function scrollspecials2(direction) {
    const specials2 = document.getElementById("specials2");
    const scrollAmount = 220; // Adjust this value based on your item width and spacing
  
    if (direction === 1) {
      // Scroll right
      specials2.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      // Scroll left
      specials2.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }*/
    function toggleSpecials() {
        const carouselContainer = document.getElementById("carousel-container");
        // Toggle display between 'none' and 'block'
        if (carouselContainer.style.display === "none" || carouselContainer.style.display === "") {
          carouselContainer.style.display = "block";
        } else {
          carouselContainer.style.display = "none";
        }
      }
     function togglenavbar(){
        const navbar=document.getElementById("navbar1_1_2");
        if(navbar.style.display==="none"||navbar.style.display==="")
        {
          navbar.style.display="block";
        }
        else{
            navbar.style.display="none";
        }
     }    
     function togglenavbar1()
     {
      const navbar1=document.getElementById("navbar1_3_2")
      if(navbar1.style.display==="none"||navbar1.style.display==="")
      {
        navbar1.style.display="block";
      }
      else{
        navbar1.style.display="none"
      }
     }  
     function togglenavbar5()
     {
        const navbar5=document.getElementById("navbar1_6_2")
        if(navbar5.style.display==="none"||navbar5.style.display==="")
        {
            navbar5.style.display="block";
        }
        else{
            navbar5.style.display="none";
        }
     }
     function search()
{
  var  sc=document.getElementById("searchbar")
    if(sc==='mess')
    {
        alert("success")
       // window.location.assign("des.html");
    }
    else{
        alert("wrong entry")
    }
}