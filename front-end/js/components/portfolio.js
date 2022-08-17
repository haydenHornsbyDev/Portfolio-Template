(function () {
    const select = document.querySelector('[data-portfolios-select]');
    const filters = document.querySelectorAll('[data-portfolios-filter]');
    
    const portfolios = document.querySelectorAll('[data-portfolio]');
    const typeDesign = document.querySelectorAll('[data-portfolio-design]');
    const typeBranding = document.querySelectorAll('[data-portfolio-branding]');
    const typeIllustration = document.querySelectorAll('[data-portfolio-illustration]');
    const typeMotion = document.querySelectorAll('[data-portfolio-motion]');
    
    const loadMoreButton = document.querySelector('[data-portfolio-more]');

    var activeFilter = undefined;
    var maxPortfoliosShown = 0;
    var filteredPortfolios = portfolios;
    var numPortfolios = portfolios.length;
    var mql = window.matchMedia('(max-width:765px)');
    
    function logSelectVal () {
        var selectVal = select.value;
        var activeFilter = selectVal;
        console.log(`The current filter is: ${activeFilter}`);
        filterPortfolios (activeFilter);
    };

    function updateFilter () {
        filters.forEach(filter => {filter.classList.remove('is-active')});
        this.classList.add('is-active');
        var activeFilter = this.textContent;
        activeFilter = activeFilter.toLowerCase();
        if (activeFilter == 'show all') {
            activeFilter = 'show-all';
        };
        console.log(`The current filter is: ${activeFilter}`);
        filterPortfolios(activeFilter);
    };

    function updatePortfolios () {
        // console.log(filteredPortfolios);
        for (let i = 0; i < maxPortfoliosShown; i++) {
            // console.log(filteredPortfolios[i]);
            filteredPortfolios[i].classList.add('is-active');
        };
    }

    function filterPortfolios (activeFilter) {
        portfolios.forEach(portfolio => {portfolio.classList.remove('is-active');});
        switch (activeFilter) {
            case 'show-all':
                filteredPortfolios = portfolios;
                break;
            case 'design':
                filteredPortfolios = typeDesign;
                break;
            case 'branding':
                filteredPortfolios = typeBranding;
                break;
            case 'illustration':
                filteredPortfolios = typeIllustration;
                break;
            case 'motion':
                filteredPortfolios = typeMotion;
                break;
        };
        updatePortfolios();
    };

    function loadMore () {
        maxPortfoliosShown += 3;
        updatePortfolios();
        // numPortfolios = filteredPortfolios.length;
        // console.log(numPortfolios);
        // if (numPortfolios <= maxPortfoliosShown) {
        //     loadMoreButton.classList.add('is-hidden');
        // } else {
        //     loadMoreButton.classList.remove('is-hidden');
        // };
    };

    function screenChange () {
        activeFilter = 'show-all';
        filterPortfolios(activeFilter);
    };
    
    
    logSelectVal();
    select.addEventListener('change', logSelectVal);

    filters.forEach(filter => {filter.addEventListener('click', updateFilter)});

    loadMore();
    loadMoreButton.addEventListener('click', loadMore);

    updatePortfolios();

    mql.addEventListener('change', screenChange);
})();