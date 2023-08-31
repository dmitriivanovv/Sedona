const link = document.querySelector(".res-link");
const popup = document.querySelector(".modal");
const close = document.querySelector(".res-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});

// close.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popup.classList.remove("modal-show");
// });