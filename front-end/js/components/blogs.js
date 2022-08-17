(function() {
    const blogEls = document.querySelectorAll('[data-blog-preview]');
    const loadMoreButton = document.querySelector('[data-load-more]');

    const totalBlogCount = blogEls.length;
    var numBlogsShown = 0;

    function loadMore () {
        console.log("beep boop");
        numBlogsShown += 3;
        for (let i = 0; i < numBlogsShown; i++) {
            blogEls[i].classList.remove('is-hidden');
        };
        if (totalBlogCount <= numBlogsShown) {
            loadMoreButton.classList.add('is-hidden');
        } else {
            loadMoreButton.classList.remove('is-hidden');
        };
    };


    loadMore();
    loadMoreButton.addEventListener('click', loadMore);
})();