"use strict";
let cards = document.querySelectorAll('img');
cards.forEach((img, idx) => {
    img.addEventListener('click', function () {
        console.log('oi');
    });
});
