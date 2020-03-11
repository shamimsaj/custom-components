/* custom dropdown */
const atbdDropdown = document.querySelectorAll('.atbd-dropdown');
// toggle dropdown
atbdDropdown.forEach(function(el) {
        el.querySelector('.atbd-dropdown-toggle').addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.atbd-dropdown-items').forEach(function(elem) {
                        elem.classList.remove('atbd-show');
                });
                el.querySelector('.atbd-dropdown-items').classList.toggle('atbd-show');
        });
});

// remvoe toggle when click outside
document.body.addEventListener('click', function(e) {
        if (e.target.getAttribute('data-drop-toggle') !== 'atbd-toggle') {
                document.querySelectorAll('.atbd-dropdown-items').forEach(function(el) {
                        el.classList.remove('atbd-show');
                });
        }
});
