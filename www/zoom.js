// code adapted from https://codereview.stackexchange.com/questions/173715/click-on-an-image-to-zoom-in

let images = document.querySelectorAll('img');
let modal = document.querySelector('.modal');

// Loops through the all the images selected...
images.forEach(function (image) {
    // When the image is clicked...
    image.addEventListener('click', function(event) {
        modal.innerHTML = '<div class="modal-content"><img src="' + event.target.src + '"><br><span>' + event.target.alt + '</span></div>';
        modal.style.display = 'block';
    });
});

// When the user clicks somewhere in the "modal" area it automatically closes itself
modal.addEventListener('click', function () {
    this.style.display = 'none';
});
