document.addEventListener("DOMContentLoaded", function () {
    var floorPlanImages = document.querySelectorAll('#floor-plan .hx-card-container img[data-target]');

    floorPlanImages.forEach(function (img) {
        img.addEventListener('click', function () {
            var modalId = this.getAttribute('data-target');
            var modalElement = document.querySelector(modalId);

            if (modalElement) {
                var modalInstance = new bootstrap.Modal(modalElement);
                modalInstance.show();
            } else {
                console.error('Modal element not found for id:', modalId);
            }
        });
    });
});
