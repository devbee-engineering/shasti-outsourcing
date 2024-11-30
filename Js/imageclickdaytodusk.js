document.addEventListener("DOMContentLoaded", function () {
    var dayToDuskImages = document.querySelectorAll('#day-to-dusk .hover-animation img[data-target]');

    dayToDuskImages.forEach(function (img) {
        img.addEventListener('click', function () {
            var modalId = this.getAttribute('data-target');
            var modalElement = document.querySelector(modalId);

            if (modalElement) {
                var backImgSrc = this.closest('.hover-animation').querySelector('.img-back').src;

                var modalImage = modalElement.querySelector('img');
                if (modalImage) {
                    modalImage.src = backImgSrc;
                }

                var modalInstance = new bootstrap.Modal(modalElement);
                modalInstance.show();

                // Toggle the clicked state class
                this.classList.toggle('clicked-state');
            } else {
                console.error('Modal element not found for id:', modalId);
            }
        });
    });
});
