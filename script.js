$(document).ready( e => {
    let stars = document.getElementById('stars');
    let meteorid = document.getElementById('meteorid');
    let rocket = document.getElementById('rocket');
    let text = document.getElementById('text');

    $(window).scroll(x => {
        let value = window.scrollY;
        stars.style.top = value * 0.20 + 'px';
        rocket.style.top = value * -0.5 + 'px';
        text.style.marginBottom = value * 1 + 'px';
    });
});