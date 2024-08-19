const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainer = document.querySelector('#dark-container');

const darkContainerImg = document.querySelector('#dark-container .home-img img');

darkContainerImg.src = 'ImgDarkPlugins.png';

toggleIcons.forEach(toggle => {
    toggle.addEventListener('click', () => {

        toggle.classList.add('disabled');
        setTimeout(() => {
            toggle.classList.remove('disabled');
        }, 1500);
        
        icons.forEach(icon => {
            icon.classList.toggle('bx-sun');
        });

        container.classList.toggle('active');
        darkContainer.classList.toggle('active');

    });
});


document.getElementById('filterBtn').addEventListener('click', function (event) {
    toggleDropdown('filter-content');
    event.stopPropagation(); 
});

document.getElementById('raritiesBtn').addEventListener('click', function (event) {
    toggleDropdown('rarities-content');
    event.stopPropagation(); 
});

document.addEventListener('click', function () {
    closeDropdowns();
});

document.addEventListener('scroll', function () {
    closeDropdowns();
});

window.addEventListener('resize', function () {
    closeDropdowns();
});

function toggleDropdown(contentClass) {
    var content = document.querySelector('.' + contentClass);
    var allContents = document.querySelectorAll('.dropdown-content');

    allContents.forEach(function (item) {
        if (item !== content) {
            item.style.display = 'none';
        }
    });

    content.style.display = (content.style.display === 'grid') ? 'none' : 'grid';
}

function closeDropdowns() {
    var allContents = document.querySelectorAll('.dropdown-content');

    allContents.forEach(function (item) {
        item.style.display = 'none';
    });
}
