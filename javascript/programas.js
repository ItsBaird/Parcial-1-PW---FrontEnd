document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-primary');
    const modal = new bootstrap.Modal(document.getElementById('programModal'));

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');

            const modalTitle = document.getElementById('modalLabel');
            const modalBody = document.querySelector('.modal-body');

            modalTitle.innerText = title;
            modalBody.innerText = description;

            modal.show();
        });
    });
});