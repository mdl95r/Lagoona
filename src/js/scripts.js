document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.js-burger-btn');
    const menuList = document.querySelector('.menu__list');
    const formBtn = document.querySelectorAll('.form-main__btn');

    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
    });

    burgerBtn.addEventListener('click', function () {
        this.classList.toggle('burger-btn--active');
        if (burgerBtn.classList.contains('burger-btn--active')) {
            menuList.style.left = '-5px';
            setTimeout(function () {
                menuList.style.display = 'block';
            }, 200);
        } else {
            menuList.style.left = '';
            setTimeout(function () {
                menuList.removeAttribute('style');
            }, 300);
        }
    });

    document.onclick = function (e) {
        const target = e.target;
        if (!target.classList.contains('burger-btn')) {
            burgerBtn.classList.remove('burger-btn--active');
            menuList.style.left = '';
            setTimeout(function () {
                menuList.removeAttribute('style');
            }, 300);
        }
    }

    window.addEventListener('resize', function () {
        let w = window.innerWidth;

        if (w < 769) {
            menuList.style.left = '';
            setTimeout(function () {
                burgerBtn.classList.remove('burger-btn--active');
                menuList.style.display = '';
            }, 300);
        }
    });

    formBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
        })
    })
});