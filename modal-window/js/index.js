document.addEventListener("DOMContentLoaded", function(event) {
    alert('ready');
    let buttonOpen = document.querySelector('.modal-button-open');
    let buttonClose = document.querySelector('.modal-button-close');

    buttonOpen.addEventListener('click', function(event) {
        let modal = document.querySelector('.modal');
        if (modal.classList.contains('close')) {
            modal.classList.remove('close');
            modal.classList.add('open');
        }
    });

    buttonClose.addEventListener('click', function(event) {
        let modal = document.querySelector('.modal');
        if (modal.classList.contains('open')) {
            modal.classList.remove('open');
            modal.classList.add('close');
        }
    });
});