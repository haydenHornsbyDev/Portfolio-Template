(function () {
    const dropCardEls = document.querySelectorAll('[data-drop-card]'); // array of all drop card divs
    const cardToggleEls = document.querySelectorAll('[data-drop-card-toggle]'); // array of all toggle buttons
    var currentCard = null;

    function changeCard () {
        // identifies the drop card element of the toggle that was selected
        currentCard = this.parentElement;

        // checks to see if drop card is active or not
        if (currentCard.classList.contains('is-active')) {
            // deactivates current card if active
            currentCard.classList.remove('is-active')
        } else {
            // deactivates all other cards then activates current card
            dropCardEls.forEach(dropCard => dropCard.classList.remove('is-active'));
            currentCard.classList.add('is-active');
        };
    }

    // calls changeCard function if any of the toggles are clicked
    cardToggleEls.forEach(cardToggle => cardToggle.addEventListener('click', changeCard));
})();