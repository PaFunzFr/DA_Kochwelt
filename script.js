const menuButton = document.getElementById('menuButton');
let slideBar = document.getElementById('slideBar');
let closeTimeout; // timer variable

function openMenu() {
    // toggle slide bar
    slideBar.classList.toggle('hidden-top');
    // reset timer
    if (closeTimeout) {
        clearTimeout(closeTimeout);
    }
    // is hidden?
    const isHidden = slideBar.classList.contains('hidden-top');
    if (!isHidden) {
        closeMenu();
    }
}

function closeMenu() {
    closeTimeout = setTimeout(() => {
        slideBar.classList.add('hidden-top');
    }, 3000);
}

