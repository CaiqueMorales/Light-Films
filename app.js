const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    hamburger.classList.toggle("active-button");
  });
};

const navMobile = () => {
  const header = document.querySelector("#header");

  // Aparição de uma sombra na parte inferior da NavBar
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

};

window.addEventListener('scroll', reveal)

      function reveal(){

        let reveals = document.querySelectorAll('.reveal')

        for (let i = 0; i < reveals.length; i++){

          let windowHeight = window.innerHeight
          let revealTop = reveals[i].getBoundingClientRect().top
          let revealPoint = 150

          if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active')
          } else {
            reveals[i].classList.remove('active')
          }

        }

      }

const callFunctions = () => {
  navSlide();
  navMobile();
};

callFunctions();
