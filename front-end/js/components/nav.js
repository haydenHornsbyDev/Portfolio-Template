(function() {
    const menuToggleEls = document.querySelectorAll('[data-menu-toggle]');
    const navEl = document.querySelector('[data-nav]');
    var mql = window.matchMedia('(max-width: 1005px)');

    function toggleNav() {
        if (window.innerWidth <= 1005) {
            const navEl = document.querySelector('[data-nav]');
            const buttonEl = document.querySelector('[data-menu-button]');
            const headerEl = document.querySelector('[data-header]');
            navEl.classList.toggle('is-hidden');
            buttonEl.classList.toggle('is-active');
            headerEl.classList.toggle('is-active');
        }
    };
    
    function closeNav() {
        const navEl = document.querySelector('[data-nav]');
        const buttonEl = document.querySelector('[data-menu-button]');
        const headerEl = document.querySelector('[data-header]');
        navEl.classList.add('is-hidden');
        buttonEl.classList.remove('is-active');
        headerEl.classList.remove('is-active');
        if (!mql.matches) {
            navEl.classList.remove('is-hidden');
        }
    };
    
    if (mql.matches) {
        navEl.classList.add('is-hidden');
    } else {
        navEl.classList.remove('is-hidden');
    };
    
    menuToggleEls.forEach(menuToggle => menuToggle.addEventListener('click', toggleNav));
    mql.addEventListener('change', closeNav);
})();