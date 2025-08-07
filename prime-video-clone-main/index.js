// function for scroll to top
function scrollUp(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

function fixNav() {
    const yAxis = window.scrollY;
    const navbar = document.querySelector('#navbar-custom');
    if (yAxis > 240) {
        navbar.style.position = 'sticky';
        navbar.style.top = '0'; // Add this line to set the sticky position
    } else {
        navbar.style.position = 'static'; // Reset the position when not scrolling past 240
    }
}
fixNav()