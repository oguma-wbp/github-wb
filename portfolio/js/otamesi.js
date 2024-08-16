const mainMenuItems = document.querySelectorAll('.main-menu > li');

mainMenuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.sub-menu').style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('.sub-menu').style.display = 'none';
    });
});

/* swiperとかを使えるようになるほうが楽かもよ、こんなの考えたくないでしょ。 */

