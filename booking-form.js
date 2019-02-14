var bookingForm = document.querySelector(".search-form");
var searchButton = document.querySelector(".search-button");
var Popup = bookingForm.querySelector(".modal-show");

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookingForm.classList.add("modal-show");

});
/* 
if (Popup.classList.contains("modal-show")) {
    searchButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        Popup.classList.remove("modal-show");   
    });
});

   if (bookingForm.classList.contains("modal-show")) {
        bookingForm.classList.remove("modal-show");
    } */


window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (bookingForm.classList.contains("modal-show")) {
            bookingForm.classList.remove("modal-show");
        }
    }
}
);






