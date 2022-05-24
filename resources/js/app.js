require('./bootstrap');
require('./props');

window.addEventListener('DOMContentLoaded', (event) => {
    var targetElement = document.querySelectorAll('.w-full');

    var observer = new IntersectionObserver(onChange);
    targetElement.forEach((el) => {
        observer.observe(el);
    })

    function onChange(entries) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('comUp');
            } else {
                entry.target.classList.remove('comUp');
            }
        });
    }
});