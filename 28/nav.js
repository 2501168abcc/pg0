"use strict";
{
    const button = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    button.addEventListener('click', function () {
        button.classList.toggle('open');
        nav.classList.toggle('open');
    });
}