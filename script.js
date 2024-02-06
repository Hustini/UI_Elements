document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navmenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navmenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n
        .addEventListener('click', function () {
            hamburger.classList.remove('active');
            navmenu.classList.remove('active');
        }));

    const accordion = document.querySelectorAll('.content-box')
    for (let i = 0; i<accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active')
        })
    }

    let open_button = document.querySelector('#show-dialog')
    open_button.addEventListener('click', function (){
        document.getElementById('dialog')
            .showModal();
    });

    const close_button = document.querySelector('#close-dialog')
    close_button.addEventListener('click', function () {
        document.getElementById('dialog')
            .close();
    })

    let jump_scare = document.querySelector('#Anmeldung')
    let img = document.querySelector('#scariii')
    jump_scare.addEventListener('click', function () {
        document.getElementById('dialog')
            .close();
        img.style.display = 'block'
        setTimeout(function () {
            img.style.display = 'none';
        }, 100);
    })
});