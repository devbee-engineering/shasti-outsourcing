document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('.hx-card-container img[data-toggle="modal"]');

    images.forEach(function (img) {
        img.addEventListener('click', function () {
            var modalId = this.getAttribute('data-target');
            var modalElement = document.querySelector(modalId);

            if (modalElement) {
                var modalImage = modalElement.querySelector('img');
                if (modalImage) {
                    // Force inline styles
                    modalImage.style.cssText = 'border: none !important; margin: 0 !important; padding: 0 !important; width: 100% !important; height: auto !important; display: block;';
                }

                var modalInstance = new bootstrap.Modal(modalElement);
                modalInstance.show();
            } else {
                console.error('Modal element not found for id:', modalId);
            }
        });
    });
});
