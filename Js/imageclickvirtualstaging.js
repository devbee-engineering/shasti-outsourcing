document.addEventListener("DOMContentLoaded", function () {
    var virtualStagingImages = document.querySelectorAll('#virtual-staging .hover-animation img[data-target]');

    virtualStagingImages.forEach(function (img) {
        img.addEventListener('click', function () {
            var modalId = this.getAttribute('data-target');
            var modalElement = document.querySelector(modalId);

            if (modalElement) {
                // Get the 'src' of the back image in the same container as the clicked image
                var backImgSrc = this.closest('.hover-animation').querySelector('.img-back').src;

                // Set the modal image source to the back image's source
                var modalImage = modalElement.querySelector('img');
                if (modalImage) {
                    modalImage.src = backImgSrc;
                }

                // Show the modal
                var modalInstance = new bootstrap.Modal(modalElement);
                modalInstance.show();
            } else {
                console.error('Modal element not found for id:', modalId);
            }
        });
    });
});
