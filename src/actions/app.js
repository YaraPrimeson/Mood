let modal = document.querySelector(".form");
let links = document.querySelectorAll(".login__link");
let close = document.querySelector(".modal__close");
let hidden = document.querySelector(".body");



for (let link of links) {
  link.onclick = function () {
    modal.classList.add("popup");
      window.scrollTo (0,0);
    hidden.classList.add("hidden");
  }
};


// for (let link of links) {
//   link.onclick = function () {
//     modal.classList.add("popup");
//       window.scrollTo (0,0);
//     hidden.classList.add("hidden");
//   }
// };


close.addEventListener("click", function (e) {
  e.preventDefault();
  if(close.onclick != modal){
  modal.classList.remove("popup");
  hidden.classList.remove("hidden");
}
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    modal.classList.remove("popup");
  }
})


// var popup = document.querySelector('.popup');
// var openPop = document.querySelector('.button-show')
// var closePop = document.querySelector('.button-hide')

// openPop.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popup.classList.add('popup--open')
//   })

//   closePop.addEventListener('click', function () {
//     popup.classList.remove('popup--open')
//     })
//     document.addEventListener('keydown', function (evt) {
//       if (evt.keyCode === 27) {
//   popup.classList.remove('popup--open')
//   }   
//       }
//       )






// function disableScrolling(){
//   let x=window.scrollX;
//   let y=window.scrollY;
//   window.onscroll=function(){window.scrollTo(x, y);};
// }





// window.addEventListener("click", function (e) {
// if(e.target == ".form") {
//   modal.style.display="none";
// }
// });
// function closeModal() {
//   modal.classList.add('hide');
//   modal.classList.remove('show');
//   document.body.style.overflow = '';
// }
