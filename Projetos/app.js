// Carousel Slider
const slider = () => {
    const carouselSlider = document.querySelector(".carousel--slider");
    const carouselImages = document.querySelectorAll(".carousel--slider img");
  
    // Buttons
    const prevBtn = document.querySelector("#prevButton");
    const nextBtn = document.querySelector("#nextButton");
  
    // Counter
    let counter = 1;
    const size = carouselImages[0].getBoundingClientRect().width;
  
    carouselSlider.style.transform = "translateX(" + -size * counter + "px";
  
    // Buttons listener
    nextBtn.addEventListener("click", () => {
  
      if (counter >= carouselImages.length - 1) return; 
      carouselSlider.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlider.style.transform = "translateX(" + (-size * counter) + "px";
    });
  
    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      carouselSlider.style.transition = "transform 0.4s ease-in-out";
      counter--;
      carouselSlider.style.transform = "translateX(" + (-size * counter) + "px";
    });
  
    carouselSlider.addEventListener('transitionend', () => {
  
      if(carouselImages[counter].id === 'last-clone'){
  
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlider.style.transform = "translateX(" + (-size * counter) + "px";
  
      }
      if(carouselImages[counter].id === 'first-clone'){
  
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = "translateX(" + (-size * counter) + "px";
  
      }
  
    })
  
  
  };


slider()