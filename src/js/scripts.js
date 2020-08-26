document.addEventListener('DOMContentLoaded', function () {
    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
    });

    document.addEventListener('click', function (e) {
        const target = e.target;
        if (target.dataset.itemValue) {
            const { itemValue } = target.dataset;
            target.parentNode.dataset.totalValue = itemValue;
            sendInfoToBackend(itemValue);
        }
    });

    function sendInfoToBackend(stars) {
        console.log(stars);
    }
});