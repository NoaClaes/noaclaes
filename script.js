// hier komt je code
// console.log("Hallo wereld!");


let popup = document.querySelector(".popup");
let knop = document.querySelector("#knop1");
let knop2 = document.querySelector("#knop2");
let closeButton = document.querySelector(".close-button");

  function togglePopup() {
      popup.classList.toggle("show-popup");
      //document.querySelector(".statistiek1").classList.add(animatie1);
      document.querySelector(".balk1").classList.toggle("anim1");
      document.querySelector(".balk2").classList.toggle("anim2");
      document.querySelector(".balk1").innerHTML = "68%";
      document.querySelector(".balk2").innerHTML = "32%";
      document.querySelector(".popup-content").classList.toggle("anim3");
  }

  function windowOnClick(event) {
      if (event.target === popup) {
          togglePopup();
      }
  }

knop.addEventListener("click", togglePopup);
knop2.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);
window.addEventListener("click", windowOnClick);
