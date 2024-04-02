//nav bar variales
const li1 = document.querySelector(".li1");
const li2 = document.querySelector(".li2");
const li3 = document.querySelector(".li3");
const li4 = document.querySelector(".li4");
const li5 = document.querySelector(".li5");
const li6 = document.querySelector(".li6");
const li7 = document.querySelector(".li7");
const li8 = document.querySelector(".li8");

//animation script for nav bar
window.onload = function() {
    navAnimation();
  }

 function navAnimation() {
    li1.style.transition = li8.style.transition = '1.2s ease-out 0.5s';
    li1.style.transform = li8.style.transform = 'translateX(0%)';
    li2.style.transition = li7.style.transition = '0.9s ease-out 0.5s';
    li2.style.transform = li7.style.transform = 'translateX(0%)';
    li3.style.transition = li6.style.transition = '0.6s ease-in 0.5s';
    li3.style.transform = li6.style.transform = 'translateX(0%)';
    li4.style.transition = '0.3s ease-in 0.5s';
    li4.style.transform = 'translateX(0%)';
    li5.style.transition = '0.3s ease-in 0.5s';
    li5.style.transform = 'translateX(0%)';
    li1.style.opacity = li2.style.opacity = li3.style.opacity = li4.style.opacity = li5.style.opacity = 
    li6.style.opacity = li7.style.opacity = li8.style.opacity = '100%';
    console.log('e suppose work bro');
}
