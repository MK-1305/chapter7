/*
ローディングから画面遷移
==================================*/
const loadingAreaGray = document.querySelector('#loading');

window.addEventListener('load', () => {
    // ローディング中
    loadingAreaGray.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});