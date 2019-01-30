var bookingForm = document.querySelector(".search-form");
var searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookingForm.classList.add("modal-show");
});


window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (bookingForm.classList.contains("modal-show")) {
            bookingForm.classList.remove("modal-show");
        }
    }
}
)