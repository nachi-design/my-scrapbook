/*
 * スクロールトリガーで
 * 要素をふわっと表示するアニメーション
 */

if (typeof window !== "undefined") {
function fadeAnime() {
    const fadeUpTriggers = document.querySelectorAll('.fadeUpTrigger');
    const fadeDownTriggers = document.querySelectorAll('.fadeDownTrigger');

    const scroll = window.pageYOffset;
    const windowHeight = window.innerHeight;

    fadeUpTriggers.forEach(element => {
        const elemPos = element.getBoundingClientRect().top + scroll + 100;
        if (scroll >= elemPos - windowHeight) {
            element.classList.add('fadeUp');
        }
    });

    fadeDownTriggers.forEach(element => {
        const elemPos = element.getBoundingClientRect().top + scroll + 100;
        if (scroll >= elemPos - windowHeight) {
            element.classList.add('fadeDown');
        }
    });
}

// スクロール時にアニメーションを実行
window.addEventListener('scroll', fadeAnime);

// ページ読み込み時にもアニメーションを実行
document.addEventListener('DOMContentLoaded', fadeAnime);

}