let body = document.body;
let show = document.querySelector('.show_cards')
const ImgElement = document.getElementById('mode_changer');

ImgElement.addEventListener('click', () => {
    if (ImgElement.src.includes('sun.svg')) {
        ImgElement.src = 'All Icons/moon.svg';
    } else {
        ImgElement.src = 'All Icons/sun.svg';
    }

    // Toggle light_theme class
    body.classList.toggle('light_theme');
    show.classList.toggle('back')
});
