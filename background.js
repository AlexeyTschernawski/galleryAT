document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    if (window.location.pathname.includes('index.html')) {
        body.classList.add('background-pagePic');
    } else if (window.location.pathname.includes('pictures.html')) {
        body.classList.add('background-page');
    }
});